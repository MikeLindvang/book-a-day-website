import mongoose from 'mongoose';

const { Schema, models, model } = mongoose;

// Block schema for fine-grained section structure
const blockSchema = new Schema({
  type: {
    type: String,
    required: true,
    enum: ['heading', 'paragraph', 'list', 'testimonial', 'cta', 'image', 'html']
  },
  hint: {
    type: String,
    trim: true
  },
  required: {
    type: Boolean,
    default: false
  }
}, { _id: false });

// Section schema for template structure
const sectionSchema = new Schema({
  key: {
    type: String,
    required: true,
    trim: true
  },
  label: {
    type: String,
    trim: true
  },
  purpose: {
    type: String,
    trim: true
  },
  blocks: [blockSchema]
}, { _id: false });

const templateSchema = new Schema({
  projectId: {
    type: String,
    required: true,
    index: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  framework: {
    type: String,
    required: true,
    enum: ['AIDA', 'PAS', 'BAB', 'Star-Story-Solution', 'VSL', 'Webinar', 'Product Launch', 'Lead Magnet', 'Custom'],
    trim: true
  },
  sections: [sectionSchema]
}, { 
  timestamps: true 
});

// Create compound index for efficient project-scoped queries
templateSchema.index({ projectId: 1, name: 1 });
templateSchema.index({ projectId: 1, framework: 1 });

export default models.Template || model('Template', templateSchema);
