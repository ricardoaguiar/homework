console.log('------------------------');
console.log('Remove Array Element');


const names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
const nameToRemove = 'Ahmad';

console.log('Array Before');
console.log(names);
// Write some code here

//splice gets the job done
names.splice(1, 1);

// Code done

console.log('Array After');
console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']
