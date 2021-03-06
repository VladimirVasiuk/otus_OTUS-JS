//
// Write a function promiseReduce, which takes an array of promises as 
// an arguments, and returns a promise with result of chain of given promises.
// promiseReduce([promise1, promise2]) // => promise1.then(promise2);
// 
//

/*

Написать функцию promiseReduce, которая принимает массив promise-ов в качестве аргументом 
 и возвращает promise, который будет ожидать исполнение всех переданных promise-ов 
 и выполнять reduce-функцию для каждого итогового значения (по аналогии с reduce).

var promise0 = Promise.resolve(0),
	promise1 = Promise.resolve(1),
	promise2 = Promise.resolve(2)

promiseReduce(
			[promise0, promise1, promise2], 
			(a, b) => a + b, 
			0
			)
			.then(res => console.log(res)) // 3

*/


var sumFn111 = function (a, b) {


    return a.reduce((promiseChain, currentTask) => {
        return promiseChain.then(chainResults =>
          currentTask.then(currentResult => 
               currentResult
          )
        );
   }, Promise.resolve(b))
   .catch(err =>  console.log("Error: %s", err));
}  

function promiseReduce(tasks, sumFn, nInit) {
	return tasks.reduce((promiseChain, currentTask) => {
		return promiseChain.then(chainResults =>
		  currentTask.then( currentResult =>
			sumFn( chainResults, currentResult) 
		  )
		);
   }, Promise.resolve(nInit))
   .catch(err =>  console.log("Error: %s", err));
	
    //return sumFn(tasks, nInit);
}

var promise0 = Promise.resolve(0),
    promise1 = Promise.resolve(1),
    promise2 = Promise.resolve(2);

	
  promiseReduce([promise0, promise1, promise2], (a, b) => a + b , 0).then(res => console.log(res));

