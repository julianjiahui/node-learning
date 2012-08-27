var globalValue=88;
var xxjulian=5;
exports.setGlobal = function(val) {
	globalValue = val;
};
exports.returnGlobal = function() {
	console.log(global);
	return globalValue;
};
