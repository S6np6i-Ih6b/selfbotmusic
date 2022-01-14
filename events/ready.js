const utils = require('../utils');

module.exports = client => {

    client.user.setActivity("San-Nom", {type: "LISTENING"});

    utils.log(`Logged in as ${client.user.tag} !`);

};