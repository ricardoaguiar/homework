function createNode (element) {
  return document.createElement (element);
}

function append (parent, el) {
  return parent.appendChild (el);
}

let div = document.getElementById ('github');
let ul = createNode ('ul');
ul.setAttribute ('class', 'mt-4');

const urls = [
  'https://api.github.com/search/repositories?q=user:wael85',
  'https://api.github.com/search/repositories?q=user:m-elshawa',
  'https://api.github.com/search/repositories?q=user:zenkaeser',
];

Promise.all (
  urls.map (url => fetch (url).then (r => r.json ()))
).then (data => {
  append (div, ul);
  data.forEach (e => {
    const name = e.items[0].owner.login;
    let li = document.createElement ('li');
    li.setAttribute ('class', 'list-group-item mb-4 font-weight-medium text-lowercase');
    append (ul, li);
    li.innerText = name + "'s repositories";
    let ul2 = createNode ('ul');
    append (li, ul2);
    e.items.forEach (e2 => {
      const {name, url, html_url} = e2;
      let li2 = document.createElement ('li');
      li2.setAttribute ('class', 'list-group font-weight-light');
      append (ul2, li2);
      li2.innerText = `${name}: ${html_url}`;
    });
  });
});
