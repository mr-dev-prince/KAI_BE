import WatchList from "../models/watchlist.model.js";

// Create
export const addToWatchList = async (req, res) => {
  const { userId, cropName } = req.body;

  try {
    const watch = new WatchList({ userId, cropName });
    await watch.save();
    res.status(201).json({ msg: "Crop added to watchlist", data: watch });
  } catch (err) {
    res.status(500).json({ msg: "Error adding crop", error: err.message });
  }
};

// Read (by user)
export const getWatchListByUserId = async (req, res) => {
  const { userId } = req.params;

  try {
    const watchList = await WatchList.find({ userId }).populate("userId", "username");
    res.status(200).json({ data: watchList });
  } catch (err) {
    res.status(500).json({ msg: "Error fetching watchlist", error: err.message });
  }
};

// Update
export const updateWatchListItem = async (req, res) => {
  const { id } = req.params;
  const { cropName } = req.body;

  try {
    const updated = await WatchList.findByIdAndUpdate(id, { cropName }, { new: true });
    if (!updated) return res.status(404).json({ msg: "Watchlist item not found" });

    res.status(200).json({ msg: "Watchlist updated", data: updated });
  } catch (err) {
    res.status(500).json({ msg: "Error updating watchlist", error: err.message });
  }
};

// Delete
export const deleteWatchListItem = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await WatchList.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ msg: "Watchlist item not found" });

    res.status(200).json({ msg: "Item removed from watchlist" });
  } catch (err) {
    res.status(500).json({ msg: "Error deleting watchlist item", error: err.message });
  }
};
