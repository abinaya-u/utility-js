const max = (array) => {

   let maximum=array[0];
    for(let element of array)
    {
        maximum = (maximum>element)?maximum:element
    }
   return maximum;
  
}

module.exports = max;
