import mongoose from 'mongoose';

const problemSchema = new mongoose.Schema(
  {
    chapterId: { type: mongoose.Schema.Types.ObjectId, ref: 'Chapter', required: true },
    title: { type: String, required: true },
    youtubeLink: { type: String },
    leetcodeLink: { type: String },
    articleLink: { type: String },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    level: { type: String, enum: ['Easy', 'Medium', 'Hard'], required: true },
  },
  { timestamps: true }
);

export const Problem = mongoose.model('Problem', problemSchema);
