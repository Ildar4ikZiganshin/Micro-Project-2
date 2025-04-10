import Item from '../models/item.js';

// @desc    Create a new item
// @route   POST /api/items
// @access  Public
export const createItem = async (req, res) => {
  try {
    const item = await Item.create(req.body);
    res.status(201).json({
      success: true,
      data: item
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message
    });
  }
};
