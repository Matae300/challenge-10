// models/plant.js
const { Schema, model } = require('mongoose');

const plantSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  wateringFrequency: {
    type: Number,
    required: true,
    trim: true,
  },
  wateringInstructions: {
    type: String,
    required: true,
    trim: true,
  },
  sunExposure: {
    type: String,
    required: true,
    trim: true,
  },
  growingMonths: {
    type: String,
    required: true,
    trim: true,
  },
  bloomSeason: {
    type: String,
    required: true,
    trim: true,
  },
  whenToPlant: {
    type: String,
    required: true,
    trim: true,
  },
  spacing: {
    type: String,
    required: true,
    trim: true,
  },
  fertilization: {
    type: String,
    required: true,
    trim: true,
  },
  tasks: [
    { 
      type: Schema.Types.ObjectId, 
      ref: 'Task' 
    }
  ],
  owner: { 
    type: Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
});

const Plant = model('Plant', plantSchema);

module.exports = Plant;
