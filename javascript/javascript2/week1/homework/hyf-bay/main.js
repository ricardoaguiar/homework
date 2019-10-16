console.log('Script loaded');

const testProductNames = ['Flat screen', 'Mobile phone', 'Wallet'];
renderProducts(testProductNames); // Should add 3 li's to the ul under the products section with Flat screen, Mobile phone, Wallet text

const list = document.querySelector('.products');

for(let i = 0; i < testProductNames.length; i++) {
    const p = testProductNames[i];
    const li = document.createElement('li');
    li.innerText = product;
    list.appendChild(li);
}


console.log(getAvailableProducts());
