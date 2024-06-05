const typeDefs = `
type User {
  _id: ID
  username: String
  email: String
  password: String
  plants: [Plant]!
  tasks: [Task]!
}

type Plant {
  _id: ID
  name: String
  description: String
  wateringFrequency: Int
  wateringInstructions: String
  sunExposure: String
  growingMonths: String
  bloomSeason: String
  whenToPlant: String
  spacing: String
  fertilization: String
  tasks: [Task]!
  owner: User!
}

type Task {
  _id: ID
  planting: String
  fertilizing: String
  pruning: String
  watering: String
  plant: Plant!
}

type Auth {
  token: ID!
  user: User
}

type Query {
  users: [User]
  user(username: String!): User
  me: User
  userPlants(username: String!): [Plant]
  userTasks(username: String!): [Task]
  task(_id: ID!): Task
}

type Mutation {
  addUser(username: String!, email: String!, password: String!): User
  login(email: String!, password: String!): Auth
  addPlant(
    name: String!,
    description: String!,
    wateringFrequency: Int!,
    wateringInstructions: String!,
    sunExposure: String!,
    growingMonths: String!,
    bloomSeason: String!,
    whenToPlant: String!,
    spacing: String!,
    fertilization: String!,
    planting: String!,
    fertilizing: String!,
    pruning: String!,
    watering: String!
  ): Plant
  removePlant(plantID: ID!): Plant
  addTask(
    planting: String!, 
    fertilizing: String!, 
    pruning: String!, 
    watering: String!
  ): Task
  removeTask(taskId: ID!): Task
}
`;