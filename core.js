const path = require('path');
const util = require('util');
const v8 = require('v8');

console.log(path.basename(__filename));

var dirUploads = path.join(__dirname, __filename);
util.log(dirUploads);
util.log(v8.getHeapStatistics());