// 1. Extract the first and third elements from the array numbers = [5, 10, 15, 20] using destructuring.
// let numbers = [5, 10, 15, 20]
// let [first, , third] = numbers
// console.log(`First element is ${first} and Third element is ${third}`);

// 2. Swap the values of a and b using array destructuring.
// let arr = [5, 10, 15, 20]
// let [a, b] = arr
// console.log(` Before swapping elements a is ${a} and b is ${b}`);
// [a, b] = [b, a]
// console.log(` After swapping elements a is ${a} and b is ${b}`);

// 3. Destructure the object {name: "John", age: 25, city: "New York"} to extract name and city into separate variables.
// let object = {name: "John", age: 25, city: "New York"}
// let name = object.name
// let city = object.city
// console.log(`The name is ${name} and city is ${city}`);

// 4. Using destructuring, assign a default value of "Guest" to user if it is not present in the object {id: 101}.
// let obj = {id : 101}
// let {user = "Guest"} = obj
// console.log(user);

// 5. Extract first and last from the nested object {person: {first: "Alice", last: "Johnson"}} using destructuring.
// let obj = {person: {first: "Alice", last: "Johnson"}}
// console.log(`Object first is ${obj.person.first} and last is ${obj.person.last}`);

// 6. Use array destructuring to ignore the second element of [100, 200, 300] and store the rest in another variable.
// let arr = [100, 200, 300]
// let newarr = [arr[0], arr[2]]
// console.log(newarr);

// 7. Destructure the array [1, 2, 3, 4] inside a function parameter and return the sum of all elements.
// let arr = [1, 2, 3, 4]
// let sum = 0
// function sumOfArrayElements(arr) {
//     let [a,b,c,d] = arr
//     sum = a+b+c+d
//     return sum
// }
// console.log(sumOfArrayElements(arr));

// 8. Destructure an object {name: "David", age: 30, job: "Developer"} and rename job to profession.
// let person = {name: "David", age: 30, job: "Developer"}
// let {job : profession} = person
// console.log(profession);

// 9. Destructure the following nested array [[1, 2], [3, 4]] to extract 1 and 4.
// let arr = [[1, 2], [3, 4]]
// let [a, , ,b] = [...arr[0], ...arr[1]]
// console.log(a, b);

// 10. Destructure an array [10, 20] and swap the values inside an if condition only if the first value is smaller than the second.
// let arr = [10, 20]
// let [a,b] = arr
// console.log(`Before swapping a = ${a} and b = ${b}`);
// if(a < b){
//     [a, b] = [b, a]
// }
// console.log(`Before swapping a = ${a} and b = ${b}`);

// 11. Destructure the object {user: {id: 5, info: {name: "Sam", city: "Paris"}}} and extract name and city.
// let obj = {user: {id: 5, info: {name: "Sam", city: "Paris"}}}
// let {name, city} = obj.user.info
// console.log(name, city);

// 12. Given an array [10, [20, 30], 40], destructure it to extract 10, 30, and 40 into separate variables.
// let arr = [10, [20, 30], 40]
// let [a,b,c] = [...arr]
// console.log(a,b[1],c);

// 13. Using array destructuring, loop over an array [[1, "one"], [2, "two"], [3, "three"]] and print each key-value pair.
// let arr = [[1, "one"], [2, "two"], [3, "three"]]
// for(let el of arr){
//     let [a,b] = el
//     console.log(a,b);
// }

// 14. Write a function that takes an object {a: 5, b: 10, c: 15} as an argument and returns the sum of a and c using destructuring.4
// let obj = {a: 5, b: 10, c: 15}
// function sumOfObjectProperties(obj){
//     let {a,b,c} = obj
//     return a + c
// }
// console.log(sumOfObjectProperties(obj));

// 15. Destructure a nested object {data: {user: {id: 3, details: {age: 25, country: "India"}}}} and extract id and country.
// let obj = {data: {user: {id: 3, details: {age: 25, country: "India"}}}}
// let {id} = obj.data.user
// let {country} = obj.data.user.details
// console.log(id, country);

// 16. Given const obj = {a: [1, 2, {b: 3}], c: {d: 4, e: [5, 6]}}, destructure to extract 3 and 6.
// let obj = {a: [1, 2, {b: 3}], c: {d: 4, e: [5, 6]}}
// let {a:[,,{b:three}], c:{e:[,six]}} = obj
// console.log(`${three} and ${six}`);

// 17. Destructure an object {items: [{price: 100}, {price: 200}], discount: 0.1} to calculate the total price after discount.
// let obj = {items: [{price: 100}, {price: 200}], discount: 0.1};
// let {items : [{price : price1}, {price : price2}], discount} = obj;
// let totalPrice = price1 + price2
// let discountedPrice = Math.floor(totalPrice * (1 - discount));
// console.log(discountedPrice);

// 18. Use destructuring in function parameters to pass {name: "Alice", scores: [80, 90, 100]} and return the average score.
// let obj = {name: "Alice", scores: [80, 90, 100]}
// function findAvgScore({scores : [a, b, c]}){
//     return (a + b + c) / 3
// }
// console.log(findAvgScore(obj));

// 19. Given const users = [{id: 1, name: "John"}, {id: 2, name: "Jane"}], use destructuring inside map() to extract id and name.
// const users = [{id: 1, name: "John"}, {id: 2, name: "Jane"}]
// users.map(({id, name})=>{   
//     console.log(id, name);
// })

// 20. Destructure an array [["x", 1], ["y", 2], ["z", 3]] using forEach() and log "Key: x, Value: 1" format for each pair.
// const arr = [["x", 1], ["y", 2], ["z", 3]]
// arr.forEach(([a, b])=>{
//     console.log(`"Key: ${a}, Value: ${b}"`);
// })