const express           = require('express');
const admin_route        = express();

admin_route.use(express.json());
admin_route.use(express.urlencoded({ extended: true }))

module.exports = admin_route 