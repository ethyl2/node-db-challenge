module.exports = {
    getResources,
    addResource,
    getResource,
    connectResourceToProject
}

const db = require('../data/db-config.js');

function getResources() {
    return db('resources');
}

function addResource(newResource) {
    return db('resources').insert(newResource)
        .then(ids => {
            return getResource(ids[0]);
        });
}

function getResource(resource_id) {
    return db('resources')
        .where({id: resource_id})
        .first();
}

function connectResourceToProject(resource_id, project_id) {
    const connection = {
        resource_id: resource_id,
        project_id: project_id
    }
    return db('project_resources')
        .insert(connection)
}

