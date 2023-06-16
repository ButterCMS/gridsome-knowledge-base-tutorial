// ./src/libs/butter.js

const butter = require("buttercms");

const Butter = butter(process.env.BUTTER_READ_TOKEN);

module.exports = Butter;
