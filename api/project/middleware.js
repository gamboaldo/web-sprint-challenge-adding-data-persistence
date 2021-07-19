const checkProjectBody = (req, res, next) => {
  const { project_name } = req.body;
  if (!project_name) {
    res.status(400).json({ message: "project_name is required" });
  } else {
    next();
  }
};

module.exports = {
  checkProjectBody,
};
