console.log('Script loaded');

const cartBtn = document.querySelector('.cart-btn');
const closeCartBtn = document.querySelector('.close-cart');
const clearCartBtn = document.querySelector('.clear-cart');
const cartDOM = document.querySelector('.cart');
const cartOverlay = document.querySelector('.cart-overlay');
const cartItems = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');
const cartContent = document.querySelector('.cart-content');
const productDOM = document.querySelector('.products-center');
const productUL = document.querySelector('section.products ul');
const productLI = document.createElement('li');
const p = document.createElement('p');

const cart = [];

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    console.log(this.name, this.price);
  }

  convertCurrency() {
    const val = document.getElementById('value');
    return this.price * `${value}`;
  }
}

class ShoppingCart {
  constructor(products) {
    this.products = products;
  }

  addProduct(product) {
    this.product.push(product);
  }

  removeProduct(product) {
    const selProduct = product;
  }

  searchProduct() {}

  getTotal() {
    const total = this.products.map(product => product.price);
    let sum = 0;
    for (let i = 0; i < total.length; i++) {
      sum += total[i];
    }
    document.getElementById('total').innerHTML = sum;
  }

  renderProducts() {
    this.product = product;
    console.log('product', product);
    productLI.innerText += `${flatscreen.name} ${flatscreen.price}`;
    productLI.innerText += `${flatscreen.name} ${flatscreen.price}`;
    productUL.appendChild(productLI);
  }

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
// local storage
class Storage {
  // class for localStorage
}

// document.addEventListener('DOMContentLoaded', () => {
//   // possibly loading all the products here after fetch.
// });

const flatscreen = new Product('flat-screen', 5000);
const mac = new Product('mac', 3000);
console.log(flatscreen, mac);

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
