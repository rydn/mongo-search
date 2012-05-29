module.exports = function(a, sstring){
 var returnAr = [];
  for(var i = 0; i < a.length; i++) {
    var posS = a[i].toLowerCase().indexOf(sstring.toLowerCase());
    if(posS > -1){
      returnAr.push(a[i]);
    }
  }
  return returnAr;
}
