import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    content: String,
    caption: String || null,
}, {timestamps: true});

export default mongoose.model('Post', PostSchema);