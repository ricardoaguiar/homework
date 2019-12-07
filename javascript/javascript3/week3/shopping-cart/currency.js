const select = document.getElementById('currencies');

function getRates() {
  fetch('https://api.exchangeratesapi.io/latest/')
    .then(res => res.json())
    .then(data => {
      const rts = data.rates; // assign the rates key to a variable
      const eu = data.base;
      console.log(eu);
      const baseRate = document.createElement('option');
      baseRate.setAttribute('value', `${eu}`);
      baseRate.innerText = `${eu}: 1.000 - Base rate`;
      select.appendChild(baseRate);
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
