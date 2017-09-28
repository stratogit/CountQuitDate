
const _ = require('lodash'),
  jsonfile = require('jsonfile');


  var fs = require("fs");
  var content =  fs.readFileSync("../test/Quiters.json");
  var jsonContent = JSON.parse(content);
  
  var countObj = _.countBy(jsonContent, function (obj) {
    return obj.dateQuit;
  });
  
  var countArr = _.map(countObj, function (value, prop) {
    return { dateQuit: prop, count: value };
  });
  
  var finalArr = _.reject(countArr, { dateQuit: 'null' });


  jsonfile.writeFileSync('../test/result.json', _.map(finalArr));
