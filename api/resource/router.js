// build your `/api/resources` router here
// build your `/api/resources` router here
const router = require("express").Router();
const { checkResourceBody } = require("./middleware");
const Resource = require("./model");

router.get("/", async (req, res, next) => {
  try {
    const resources = await Resource.getAll();
    res.json(resources);
  } catch (err) {
    next(err);
  }
});

router.post("/", checkResourceBody, async (req, res, next) => {
  try {
    const resource = await Resource.create(req.body);
    res.json(resource);
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
