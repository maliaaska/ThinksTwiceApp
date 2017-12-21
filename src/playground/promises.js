const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: "arek",
      age: 38
    });
    reject('Something went wrong!');
  }, 5000)
  
});
console.log('before');

promise.then((data) => {
  console.log(data);

  return 'some text'
}).then((str) => {
  console.log('does this run?', str)
}).catch((error) => {
  console.log('error: ', error);
});

console.log('after');