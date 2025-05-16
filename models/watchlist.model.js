import mongoose from "mongoose";

const watchListSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  cropName: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true
});

const WatchList = mongoose.model("WatchList", watchListSchema);

export default WatchList;
