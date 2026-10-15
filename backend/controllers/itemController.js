import Item from "../models/Item.js";

// Fields a client is allowed to send when creating or updating an item
const ITEM_FIELDS = [
  "name",
  "category",
  "price",
  "discountPercentage",
  "description",
  "imageUrl",
];

// Pick only the known item fields from the request body.
// An empty discount means "no discount", so it is stored as 0.
const pickItemFields = (body = {}) => {
  const data = {};

  ITEM_FIELDS.forEach((field) => {
    if (body[field] !== undefined) {
      data[field] = body[field];
    }
  });

  if (data.discountPercentage === "" || data.discountPercentage === null) {
    data.discountPercentage = 0;
  }

  return data;
};

export const getItems = async (req, res) => {
  try {
    const items = await Item.find().sort({ createdAt: -1 });
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch items" });
  }
};

export const getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch item" });
  }
};

export const createItem = async (req, res) => {
  try {
    const newItem = await Item.create(pickItemFields(req.body));
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({
      message: "Failed to create item",
      error: error.message,
    });
  }
};

export const updateItem = async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(
      req.params.id,
      pickItemFields(req.body),
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(400).json({
      message: "Failed to update item",
      error: error.message,
    });
  }
};

export const deleteItem = async (req, res) => {
  try {
    const deletedItem = await Item.findByIdAndDelete(req.params.id);

    if (!deletedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json({ message: "Item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete item" });
  }
};
