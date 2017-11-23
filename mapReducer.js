// create an array
var numbers = [0, 1, 2, 3];

/* predicate over the array item, if true, accemulate the value to the reutrn after transform the value */
const mapReducer= (transformer, predicate, array)=>{
	return array.reduce((accemulate,value)=>{
	      if(predicate(value)){
		  acc.push(transformer(value))
		  return accemulate;
		}
      		return accemulate;
    },[]);
}
const duobleNum= x=> x*2;
const isEven= x=> x %2 ==0;

result = mapReducer(duobleNum, isEven, numbers)
// log the result
console.log(result);
// expected output: Array [0, 4]
