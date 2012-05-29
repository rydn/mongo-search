//takes a table and a field name and returns a array with all the fields 
values
module.exports = function(tableArray, field){
	var returnAr = [];
	for(var i =0; i < tableArray.length; i++){
		var item = tableArray[i];
		returnAr.push(item[field]);
	}
	return returnAr;
}
