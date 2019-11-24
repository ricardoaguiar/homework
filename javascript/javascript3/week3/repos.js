
function createNode (element) {
  return document.createElement (element);
}

function append (parent, el) {
  return parent.appendChild (el);
}

let ul = createNode ('ul');
let div = document.getElementById('github');

let ghRepo = fetch('https://api.github.com/search/repositories?q=user:ricardoaguiar')
    .then(res => res.json()) 
    .then(json => {
        console.log(json);
        const { } = json.items;
        console.log(name);
        // console.log(full_name);

        // json.items.forEach((items) => {
        //     console.log(items);
        //     let li = createNode('li');
        //     append(ul, li);
        //     append(div, ul);
        //     li.innerText = items;


    });
// });