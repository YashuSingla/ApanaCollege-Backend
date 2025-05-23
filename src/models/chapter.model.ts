import mongoose from 'mongoose';

const chapterSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    problems: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Problem' }]
  },
  { timestamps: true }
);

export const Chapter = mongoose.model('Chapter', chapterSchema);
