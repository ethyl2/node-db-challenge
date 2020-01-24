module.exports = {
    getResources
}

const db = require('../data/db-config.js');

function getResources() {
    return db('resources');
}