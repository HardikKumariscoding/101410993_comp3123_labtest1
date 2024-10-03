function resolvedPromise() {
  return new Promise(function(resolve) {
      setTimeout(function() {
          resolve({ message: 'delayed success' });
      }, 500);
  });
}

function rejectedPromise() {
  return new Promise(function(resolve, reject) {
      setTimeout(function() {
          reject(new Error('delayed exception'));
      }, 500);
  });
}

resolvedPromise()
  .then(function(result) {
      console.log(result);
  })
  .catch(function(error) {
      console.error(error);
  });

rejectedPromise()
  .then(function(result) {
      console.log(result);
  })
  .catch(function(error) {
      console.error(error);
  });
