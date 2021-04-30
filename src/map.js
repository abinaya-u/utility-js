const map = (array,functionName) => {

    const result =[];
    for(let v of array)
    {
        result.push(functionName(v))
    }
   return result;
  
}

module.exports = map;
