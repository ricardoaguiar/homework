console.log('----------------------');
console.log('find the shortest word');

const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];

function findWord(danishWords) {
  const shortWord = danishWords.reduce((a, b) => { if (a.length < b.length) {
    return a;
  } else {
    return b;
  }
});
return shortWord;
}

let result = findWord(danishWords); // returns 'ø'
console.log(result);
