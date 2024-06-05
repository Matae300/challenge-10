const { Schema, model } = require('mongoose');

const taskSchema = new Schema({
  planting: { 
    type: String, 
    required: true 
  },
  fertilizing: {
     type: String, 
     required: true 
  },
  pruning: { 
    type: String, 
    required: true 
  },
  watering: { 
    type: String, 
    required: true 
  },
  plant: { 
    type: Schema.Types.ObjectId, 
    ref: 'Plant', 
    required: true },
});

const Task = model('Task', taskSchema);

module.exports = Task;