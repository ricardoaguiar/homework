console.log('Script loaded');

const testProductNames = ['Flat screen', 'Mobile phone', 'Wallet'];
// renderProducts(testProductNames); // Should add 3 li's to the ul under the products section with Flat screen, Mobile phone, Wallet text

const section = document.querySelector('.products');
const ul = document.querySelector('.products ul');

for(let i = 0; i < testProductNames.length; i++) {
    const pdt = testProductNames[i];
    console.log('product name', pdt);
    const li = document.createElement('li');
    console.log(li);
    li.innerText = pdt;
    ul.appendChild(li);
}


console.log(getAvailableProducts());
