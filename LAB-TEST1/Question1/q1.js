function lowerCaseWords(arr) {
  return new Promise((resolve, reject) => {
      if (!Array.isArray(arr)) {
          return reject(new Error('The input should be an array!'));
      }

      const lowercaseStrings = [];
      
      for (let i = 0; i < arr.length; i++) {
          const item = arr[i];
          if (typeof item === 'string') {
              lowercaseStrings.push(item.toLowerCase());
          }
      }

      resolve(lowercaseStrings);
  });
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'wings'];

lowerCaseWords(mixedArray)
  .then(result => console.log(result))  
  .catch(error => console.log(error.message));
