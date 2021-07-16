const checkTaskBody = (req, res, next) => {
  const { task_description, project_id } = req.body;

  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .json({ message: "task_description and project_id are required" });
  } else if (!task_description || !project_id) {
    res
      .status(400)
      .json({ message: "task_description and project_id are required" });
  } else {
    next();
  }
};

module.exports = { checkTaskBody };
