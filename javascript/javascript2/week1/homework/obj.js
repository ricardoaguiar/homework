let obj = {
  name: "name1",
  nest: [
    {
      name: "name2",
      nest: [
        {
          name: "name3"
        },
        {
          name: "name4",
          nest: [
            {
              name: "name5",
              nest: [
                {
                  name: "name6"
                }
              ]
            },
            {
              name: "name7"
            },
            {
              name: "name8"
            }
          ]
        }
      ]
    }
  ]
}

let parent = document.querySelector("ul");

function forOf (obj) {
	for (let key in obj) {
		if ( typeof obj[key] === "object" && obj.hasOwnProperty("nest") ) {
			createList(obj[name], obj[key]);
		} else if ( typeof obj[key] !== "object" ) {
			let item = document.createElement("li");
			item.textContent = obj[key];
			parent.appendChild(item);
		} else {
			forOf(obj[key]);
		}
	}
}

function createList(obj, skills) {
	let item = document.createElement("ul");
	item.textContent = obj;
	parent.appendChild(item);
	parent = item;
	forOf(skills);
}

forOf(obj);

//solution

function createList(parent, array) {
    array.forEach(function (o) {
        var li = document.createElement("li"),
            ul;

        li.textContent = o.name;
        parent.appendChild(li);
        if (o.nest) {
            ul = document.createElement("ul");
            li.appendChild(ul);
            createList(ul, o.nest);
        }
    });
}

var  object = { name: "name1", nest: [{ name: "name2", nest: [{ name: "name3" }, { name: "name4", nest: [{ name: "name5", nest: [{ name: "name6" }] }, { name: "name7" }, { name: "name8" }] }] }] }

createList(document.querySelector("ul"), [object]);