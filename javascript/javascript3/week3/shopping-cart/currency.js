const select = document.getElementById('currencies');

function getRates() {
  fetch('https://api.exchangeratesapi.io/latest/?base=EUR')
    .then(res => res.json())
    .then(data => {
      const rts = data.rates; // assign the rates key to a variable
      for (const [key, value] of Object.entries(rts)) {
        // console.log(`key: ${key}, value: ${value}`);
        const option = document.createElement('option');
        option.setAttribute('value', `${key}`);
        option.innerText = `${key}: ${value}`;
        select.appendChild(option);
      }
    });
}
getRates();
