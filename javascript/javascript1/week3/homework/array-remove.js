console.log('-----------------------------------');
console.log('Remove array element');


console.log('array before'); //log array before loop

const names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
console.log(names);

const nameToRemove = 'Ahmad';

// Write some code here
for (i =0; i < names.length; i++) {
  if (names[i] === nameToRemove) {
    names.splice(i, 1);
    // i--;
  }
}

// Code done
console.log('array after'); //log array after loop

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']
