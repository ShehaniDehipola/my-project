const FinanceDetail = require("../models/FinanceDetailsModel");
const mongoose = require("mongoose");

//get all details
const getFinanceDetails = async (req, res) => {
  const financeDetails = await FinanceDetail.find({}).sort({ createdAt: -1 });

  res.status(200).json(financeDetails);
};

//get single detail
const getFinanceDetail = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such finance detail" });
  }

  const financeDetail = await FinanceDetail.findById(id);

  if (!financeDetail) {
    return res.status(404).json({ error: "No such finance detail" });
  }
  res.status(200).json(financeDetail);
};

//create new detail
const createFinanceDetail = async (req, res) => {
  const { salesID, invoiceID, dateAndTime, amount, branchID } = req.body;

  //add doc to db
  try {
    const finance = await FinanceDetail.create({
      salesID,
      invoiceID,
      dateAndTime,
      amount,
      branchID,
    });
    res.status(200).json(finance);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete detail
const deleteFinanceDetail = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such finance detail" });
  }

  const financeDetail = await FinanceDetail.findOneAndDelete({ _id: id });

  if (!financeDetail) {
    return res.status(404).json({ error: "No such finance detail" });
  }

  res.status(200).json(financeDetail);
};

//update detail
const updateFinanceDetail = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such finance detail" });
  }

  const financeDetail = await FinanceDetail.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!financeDetail) {
    return res.status(404).json({ error: "No such finance detail" });
  }

  res.status(200).json(financeDetail);
};

module.exports = {
  getFinanceDetails,
  getFinanceDetail,
  createFinanceDetail,
  deleteFinanceDetail,
  updateFinanceDetail,
};
