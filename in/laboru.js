const numbers = [1, 2, 3, 4, 5];

// Using a for loop
console.log("Using a for loop:");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Using forEach method
console.log("\nUsing forEach method:");
numbers.forEach(number => {
    console.log(number);
});

// Using for...of loop
console.log("\nUsing for...of loop:");
for (const number of numbers) {
    console.log(number);
}
