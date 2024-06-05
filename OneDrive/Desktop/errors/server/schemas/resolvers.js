const { User, Plant, Task } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express'); 

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('plants');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('plants');
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('plants');
      }
      throw AuthenticationError;
    },
    userPlants: async (_, { username }, { User }) => {
      const user = await User.findOne({ username }).populate('plants');
      if (!user) {
        throw new Error('User not found');
      }
      return user.plants;
    },

    // Get a specific plant of a user by ID
    plant: async (_, { plantID }, { Plant }) => {
      const plant = await Plant.findById(plantID);
      if (!plant) {
        throw new Error('Plant not found');
      }
      return plant;
    },

    // Get all tasks of a user
    userTasks: async (_, { username }, { User }) => {
      const user = await User.findOne({ username }).populate('tasks');
      if (!user) {
        throw new Error('User not found');
      }
      return user.tasks;
    },

    // Get a specific task of a user by ID
    task: async (_, { taskID }, { Task }) => {
      const task = await Task.findById(taskID);
      if (!task) {
        throw new Error('Task not found');
      }
      return task;
    },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    addPlant: async (_, { 
      name, 
      description,
      wateringFrequency,
      wateringInstructions,
      sunExposure,
      growingMonths,
      bloomSeason,
      whenToPlant,
      spacing,
      fertilization,
      tasks 
    }, context) => {
      if (context.user) {
        const plant = await Plant.create({
          name, 
          description,
          wateringFrequency,
          wateringInstructions,
          sunExposure,
          growingMonths,
          bloomSeason,
          whenToPlant,
          spacing,
          fertilization,
          tasks,
          owner: context.user._id 
        });
    
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { plants: plant._id } }
        );
    
        return plant;
      }
      throw new AuthenticationError('User not authenticated');
    },
    removePlant: async (parent, { plantId }, context) => {
      if (!context.user) {
        throw new AuthenticationError('User not authenticated');
      }
    
      try {
        const plant = await Plant.findOneAndDelete({ _id: plantId });
    
        if (!plant) {
          throw new Error('Plant not found'); 
        }
    
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { plants: plant._id } }
        );
    
        return plant;
      } catch (error) {
        throw new Error(error.message);
      }
    },
    addTask: (parent, args) => {
      // Implement logic to add a task
      const newTask = createTask(args);
      return newTask;
    },
    removeTask: (parent, args) => {
      // Implement logic to remove a task by ID
      const { taskId } = args;
      const removedTask = removeTask(taskId);
      return removedTask;
    },
  },
};

module.exports = resolvers;
