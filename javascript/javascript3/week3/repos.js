
function createNode (element) {
  return document.createElement (element);
}

function append (parent, el) {
  return parent.appendChild (el);
}

let div = document.getElementById('github');
let ul = createNode ('ul');
// append(div, ul);
let ul2 = createNode('ul');
const api = "https://api.github.com/search/repositories?q=user:ricardoaguiar";

let ghRepo = fetch(api)
    .then(res => res.json()) 
    .then(json => {
        console.log('log json', json);
        console.log(typeof json);
        for (let i in json) {
          console.log(i);
        }
    }); 