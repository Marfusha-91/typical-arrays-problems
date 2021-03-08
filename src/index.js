
exports.min = function min (array) { 
    if ( !array  || array.length === 0 )  return 0; 
    else 
   return  Math.min(...array); 
 } 

exports.max = function max (array) { 
    if ( !array  || array.length === 0 )  return 0; 
    else 
   return  Math.max(...array); 
 } 


exports.avg = function avg (array) {
  if ( !array  || array.length === 0 )  return 0;
   else
    const reduser = (a,c) => (a+c) / array.length
    return arr.reduce(reduser, 0) 
}
