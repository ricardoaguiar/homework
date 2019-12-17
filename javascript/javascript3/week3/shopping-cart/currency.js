const sel = document.getElementById('currencies');

function getRates() {
  fetch('https://api.exchangeratesapi.io/latest/')
    .then(res => res.json())
    .then(data => {
      const rts = data.rates; // assign the rates key to a variable
      const eu = data.base;
      console.log(eu);
      const baseRate = document.createElement('option');
      baseRate.setAttribute('value', `${1}`);
      baseRate.innerText = `${eu}: 1.000 - Base rate`;
      sel.appendChild(baseRate);
      for (const [key, value] of Object.entries(rts)) {
        // console.log(`key: ${key}, value: ${value}`);
        const option = document.createElement('option');
        option.setAttribute('value', `${value}`);
        option.innerText = `${key}: ${value}`;
        sel.appendChild(option);
      }
      // const value = sel.options[sel.selectedIndex].value;
      // const text = sel.options[sel.selectedIndex].innerText;
    });
}
getRates();
