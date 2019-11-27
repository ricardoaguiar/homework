let select = document.getElementById ('currencies');

function getRates () {
  fetch ('https://api.exchangeratesapi.io/latest/')
  .then (res => res.json ())
  .then (data => {
    const rts = data.rates; //assign the rates key to a variable
    // console.log (rts);
    //iterates over the rates and paint to the DOM
    for (const [key, value] of Object.entries (rts)) {
      console.log (`key: ${key}, value: ${value}`);
      //create an option for each currency
      let option = document.createElement('option');
      //set a value for each currency
      option.setAttribute('value', `${key}`);
      option.innerText = `${key}: ${value}`;
      select.appendChild (option);
      }
    });
}
getRates ();
