const max = (array) => {

   let maximum=0;
    for(let element of array)
    {
        maximum = (maximum>element)?maximum:element
    }
   return maximum;
  
}

module.exports = max;
