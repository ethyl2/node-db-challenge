module.exports = {
    getProjects,
    addProject,
    getProject
}

const db = require('../data/db-config.js');

function getProjects() {
    return db('projects');
}

function addProject(newProject) {
    const project = {
        name: newProject.name,
        description: newProject.description,
        completed: newProject.completed || 'false'
    }

    return db('projects')
        .insert(project)
        .then(ids => {
            return getProject(ids[0]);
        })
}

function getProject(project_id) {
    return db('projects')
        .where({ id: project_id})
        .first();
}