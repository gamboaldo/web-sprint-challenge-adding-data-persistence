// build your `Project` model here
const db = require("../../data/dbConfig");

async function getAll() {
  const proj = await db("projects");

  return proj.map((projects) => {
    return {
      ...projects,
      project_completed: projects.project_completed ? true : false,
    };
  });
}

const create = async (project) => {
  const [id] = await db("projects").insert(project, ["project_id"]);
  const newProject = await getById(id);
  return {
    ...newProject,
    project_completed: newProject.project_completed ? true : false,
  };
};

const getById = (project_id) => {
  return db("projects").where({ project_id }).first();
};

module.exports = { getAll, create };
