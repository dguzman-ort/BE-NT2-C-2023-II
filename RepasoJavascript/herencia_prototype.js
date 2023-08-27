const arr = ['Instituto ORT', 42, true, function() {    
  console.log('Hola mundo')
}];

console.log(arr)


arr.push(5)

console.log(arr)

console.log(typeof arr, arr.toString())

arr.__proto__.toString = function(){
  return 'hello world'
}

console.log(arr.toString())

const array2 = [1, 4, 6]

console.log(array2.toString())