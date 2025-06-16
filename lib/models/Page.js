import mongoose from 'mongoose';

const { Schema, models, model } = mongoose;

const pageSchema = new Schema({
  slug: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: String,
  heroImage: String,
  published: Boolean,
  blocks: { type: [Schema.Types.Mixed], default: [] },
}, { timestamps: true });

export default models.Page || model('Page', pageSchema);