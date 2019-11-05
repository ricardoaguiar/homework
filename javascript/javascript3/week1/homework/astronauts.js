let thePeople = [], theName, theCraft;
dataObj = {};

let showData = function () {
  for (let prop in dataObj) {
    console.log (prop);
    console.log (dataObj[prop]);
  }
};

fetch ('http://api.open-notify.org/astros.json')
  .then (function (resp) {
    return resp.json ();
  })
  .then (function (data) {
    console.log (data);
    theName = data.name;
    theCraft = data.craft;
    thePeople = data.people;
    dataObj = data;
    showData ();
  });
