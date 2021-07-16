// build your `Resource` model here
// build your `Resource` model here
const db = require("../../data/dbConfig");

const getAll = () => {
  return db("resources");
};

const create = async (resource) => {
  const [id] = await db("resources").insert(resource, ["resource_id"]);
  return getById(id);
};

const getById = (resource_id) => {
  return db("resources").where({ resource_id }).first();
};

module.exports = {
  getAll,
  create,
};
