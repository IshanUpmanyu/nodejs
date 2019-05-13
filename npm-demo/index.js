var _ = require('underscore');
/*
    Require first assumes underscore is a core module.
    Id not then if assumes there is a folder or file in same directory by that name
    lastly it looks for the folder under node_modules.
*/

console.log(_.contains([1,2,3],2));