const notFound = (req, res) => {
  return res.status(404).json({ msg: "Page could not be found" });
};

module.exports = notFound;
