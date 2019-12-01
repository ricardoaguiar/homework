console.log('Script loaded');

const productList = [
  { productName: 'Dell Monitor', productPrice: 1000 },
  { productName: 'Apple Laptop', productPrice: 3000 },
  { productName: 'iPhone 11', productPrice: 500 },
];

console.log(productList);
// debugger;
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  convertCurrency() {
    const currentPrice = this.price;
    console.log('currency converter');
  }
}

class ShoppingCart {
  constructor(products) {
    this.products = products;
  }

  addProduct(product) {
    this.product.push(product);
    // return this.product;
  }

  removeProduct(product) {}

  searchProduct(productName) {
    this.productName = productName;
    console.log('productName');
    return productName;
  }

  getTotal() {}

  renderProducts() {}

  // getUser method
  getUser() {
    const user = document.getElementById('user');
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(r => r.json())
      .then(data => {
        console.log(data.name);
        user.innerText = `Welcome ${data.name}`;
      });
  }
}

const flatscreen = new Product('flat-screen', 5000);
console.log(flatscreen);

const shoppingCart = new ShoppingCart([flatscreen]);
console.log(shoppingCart);

const products = new Product();
products.convertCurrency();

shoppingCart.searchProduct();
shoppingCart.getUser();

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

/*
const products = getAvailableProducts();

const liClass = Object.keys(Object.assign({}, ...products));
console.log(liClass); // returns an array with the Object.keys

// const section = document.querySelector('.products'); //select the section tag with products class
// console.log(section);

const ulProducts = document.querySelector('.products ul'); // select the products ul
console.log(ulProducts);

// Should add 3 li's to the ul under the products section with Flat screen, Mobile phone, Wallet text
function renderProducts(testProductNames) {
  for (let i = 0; i < testProductNames.length; i++) {
    const shippingCountries = testProductNames[i].shipsTo;

    const liProduct = document.createElement('li'); // create a li container for each product
    liProduct.setAttribute('class', 'liProduct');
    ulProducts.appendChild(liProduct); // append it to ul products

    ulSingleProduct = document.createElement('ul'); // create a ul inside each li container
    ulSingleProduct.setAttribute('class', 'ulSingleProduct');
    liProduct.appendChild(ulSingleProduct); // append it to the li container

    const liName = document.createElement('li'); // li for name
    liName.setAttribute('class', liClass[1]);
    liName.innerText = testProductNames[i].name;
    ulSingleProduct.appendChild(liName);

    const liPrice = document.createElement('li'); // li for price
    liPrice.setAttribute('class', liClass[2]);
    liPrice.innerText = testProductNames[i].price;
    ulSingleProduct.appendChild(liPrice);

    const liRating = document.createElement('li'); // li for rating
    liRating.setAttribute('class', liClass[3]);
    liRating.innerText = testProductNames[i].rating;
    ulSingleProduct.appendChild(liRating);

    const liShipsTo = document.createElement('li'); // li for the shipping
    liShipsTo.setAttribute('class', liClass[4]); // class shipsTo
    ulSingleProduct.appendChild(liShipsTo); // append ship li to ul single product

    const ulShipping = document.createElement('ul'); // create a ul inside shipsTo li
    // const liShipping = document.createElement('li'); //create a li inside shipsTo ul
    console.log(shippingCountries);

    shippingCountries.forEach(element => {
      const liCountries = document.createElement('li');
      liCountries.setAttribute('class', element);
      ulShipping.appendChild(liCountries);
      liCountries.innerText = element;
    });

    // ulShipping.appendChild(liShipping);
    liShipsTo.appendChild(ulShipping);
  }
}

// function searchProducts(name, country) {
//   const mactchingProducts = products
//   .filter(p => p.name.toLoweCase().includes(name.toLoweCase()))
//   .filter(p => {
//     if (country) {
//       return.shipsTo.map(c => c.toLoweCase()).includes(country.toLoweCase());
//     } else {
//       return true;
//     }
//   });
// renderProducts(mactchingProducts);
// }

// renderProducts (testProductNames);
renderProducts(products);
*/
