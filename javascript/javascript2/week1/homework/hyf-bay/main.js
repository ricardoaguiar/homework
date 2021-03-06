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
// const testProductNames = [ 'Flat Screen', 'Mobile Phone', 'Wallet', ];
const testProductNames = [
        { 
        id: 1, 
        name: 'Flat Screen', 
        price: 4000, 
        rating: 4.5,
        shipsTo: ['Denmark', 'Germany'],
        },
        { 
        id: 2, 
        name: 'Mobile Phone', 
        price: 3500, 
        rating: 5,
        shipsTo: ['Denmark', 'Germany', 'USA'],
        },
        { 
        id: 3, 
        name: 'Wallet', 
        price: 1000, 
        rating: 4,
        shipsTo: ['Denmark', 'Norway', 'Finland'],
        },
];


const products = getAvailableProducts();

const liClass = Object.keys(Object.assign({}, ...products));
console.log(liClass); //returns an array with the Object.keys


// const section = document.querySelector('.products'); //select the section tag with products class
// console.log(section);

const ulProducts = document.querySelector('.products ul'); //select the products ul
console.log(ulProducts);


// Should add 3 li's to the ul under the products section with Flat screen, Mobile phone, Wallet text
function renderProducts(testProductNames) { 
    
    for(let i = 0; i < testProductNames.length; i++) {

        const shippingCountries = testProductNames[i].shipsTo;

        const liProduct = document.createElement('li'); //create a li container for each product
        liProduct.setAttribute('class', 'liProduct');
        ulProducts.appendChild(liProduct); //append it to ul products
        
            ulSingleProduct = document.createElement('ul'); //create a ul inside each li container
            ulSingleProduct.setAttribute('class', 'ulSingleProduct');
            liProduct.appendChild(ulSingleProduct); //append it to the li container

                const liName = document.createElement('li');//li for name
                liName.setAttribute('class', liClass[1]);
                liName.innerText = testProductNames[i].name;
                ulSingleProduct.appendChild(liName);

                const liPrice = document.createElement('li');//li for price
                liPrice.setAttribute('class', liClass[2]);
                liPrice.innerText = testProductNames[i].price;
                ulSingleProduct.appendChild(liPrice);

                const liRating = document.createElement('li');//li for rating
                liRating.setAttribute('class', liClass[3]);
                liRating.innerText = testProductNames[i].rating;
                ulSingleProduct.appendChild(liRating);
            
                const liShipsTo = document.createElement('li');//li for the shipping
                liShipsTo.setAttribute('class', liClass[4]); //class shipsTo
                ulSingleProduct.appendChild(liShipsTo);//append ship li to ul single product

                    const ulShipping = document.createElement('ul'); //create a ul inside shipsTo li
                    // const liShipping = document.createElement('li'); //create a li inside shipsTo ul
                    console.log(shippingCountries);
                    
                    shippingCountries.forEach(element => {
                        let liCountries = document.createElement('li');
                        liCountries.setAttribute('class', element);
                        ulShipping.appendChild(liCountries);
                        liCountries.innerText = element;
                    });
                    
                    // ulShipping.appendChild(liShipping);
                    liShipsTo.appendChild(ulShipping);
        
    }
}


// function renderProducts(products) { 
//     for(let i = 0; i < products.length; i++) {
//         const producId = products[i].id;
//         const productName = products[i].name;
//         const productPrice = products[i].price;
//         const productRating = products[i].rating;
//         const productShipsTo = products[i].shipsTo;
        
//         const li = document.createElement('li'); //li for object
//         const ul = document.createElement('ul'); //ul inside li for objects
//         li.innerText = productName + ' | ' + productPrice + ' | ' + productRating + ' | ' + productShipsTo;
//         ul.appendChild(li);
//         li.appendChild(ul);
//     }
// }



// console.log(products);




// console.log(renderProducts(testProductNames));

// console.log(getAvailableProducts());


renderProducts(testProductNames);
renderProducts(products);


