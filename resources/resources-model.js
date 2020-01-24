module.exports = {
    getResources,
    addResource,
    getResource
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

