// build your `/api/projects` router here
const router = require("express").Router();
const { checkProjectBody } = require("./middleware");
const Project = require("./model");

router.get("/", async (req, res, next) => {
  try {
    const projects = await Project.getAll();
    res.json(projects);
  } catch (err) {
    next(err);
  }
});

router.post("/", checkProjectBody, async (req, res, next) => {
  try {
    const project = await Project.create(req.body);
    res.json(project);
  } catch (err) {
    next(err);
  }
});
router.use((err, req, res) => {
  // eslint-disable-line
  res.status(500).json({
    error: err.message,
    stack: err.stack,
  });
});

module.exports = router;
