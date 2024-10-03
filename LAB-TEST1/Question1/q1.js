function lowerCaseWords(arr) {
    
    return new Promise((resolve, reject) => {
      
      if (!Array.isArray(arr)) {
        reject('The input should be an array!'); 
      } else {
        const lowercaseStrings = arr.filter(item => typeof item === 'string')
                                    .map(word => word.toLowerCase()); 
        
        resolve(lowercaseStrings);
      }
    });
  }
  
  const mixedArray = ['PIZZA', 10, true, 25, false, 'wings'];
  
  lowerCaseWords(mixedArray)
    .then(result => console.log(result))  
    .catch(error => console.log(error)); 
  