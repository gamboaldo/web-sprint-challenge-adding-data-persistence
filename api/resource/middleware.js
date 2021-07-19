const checkResourceBody = (req, res, next) => {
  const { resource_name } = req.body;

  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).json({ message: "resource_name is required" });
  } else if (!resource_name) {
    res.status(400).json({ message: "resource_name is required" });
  } else {
    next();
  }
};

module.exports = { checkResourceBody };
