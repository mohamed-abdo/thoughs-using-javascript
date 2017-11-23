// create an array
var numbers = [0, 1, 2, 3];

/* call reduce() on the array, passing a callback
that adds all the values together */
const mapReduce= (xs,predicate,array)=>{
	return array.reduce((acc,value)=>{
      if(predicate(value)){
          acc.push(xs(value))
          return acc;
    	}
      return acc;
    },[]);
}
const duoblNum= x=> x*2;
const isEven= x=> x %2 ==0;

result = mapReduce(duoblNum, isEven, numbers)
// log the result
console.log(result);
// expected output: Array [0, 4]
