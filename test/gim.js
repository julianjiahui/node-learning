var globalValue;
exports.setGlobal = function(val) {
globalValue = val;
};
exports.returnGlobal = function() {
//console.log(global);
return globalValue;
};

//We might expect that in the print out of the Global object we'll see globalValue, as we do when we seta variable in our applications. This doesn't happen, though.