const promise1 = Promise.resolve('성공1');
const promise2 = Promise.reject('성공2');
const promise3 = Promise.resolve('성공3');

Promise.allSettled([promise1, promise2, promise3])
.then((result) => {
    result.forEach(result => {
        console.log(result);
    })
})
.catch((error) => {
    console.error(error);
})