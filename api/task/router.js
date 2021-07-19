// build your `/api/tasks` router here
// build your `/api/tasks` router here
const router = require("express").Router();
const { checkTaskBody } = require("./middleware");
const Task = require("./model");

router.get("/", async (req, res, next) => {
  try {
    const tasks = await Task.getAll();
    res.json(tasks);
  } catch (err) {
    next(err);
  }
});

router.post("/", checkTaskBody, async (req, res, next) => {
  try {
    const task = await Task.create(req.body);
    res.json(task);
  } catch (err) {
    next(err);
  }
});

router.use((err, req, res, next) => {
  // eslint-disable-line
  res.status(500).json({
    error: err.message,
    stack: err.stack,
  });
});

module.exports = router;
