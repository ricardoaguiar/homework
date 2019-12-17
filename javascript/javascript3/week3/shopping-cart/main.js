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
const productLI2 = document.createElement('li');
const p = document.createElement('p');

const cart = [];

const convertedCur = document.getElementById('converted-currency');
const conversionResult = document.createElement('p');
// convertedCur.appendChild(conversionResult);

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

getProduct() {
   fetch('products.json')
    .then (r => r.json())
    .then((data)=> {
      let prod = data.items;
      console.log(prod); 
      prod = prod.map(item => {
        console.log(prod);
        const { name, price, imgUrl } = item;
        return { name, price, imgUrl };
      })
    return prod;
      });
    }catch (e) {
      console.log(e);
    }


  convertCurrency() {
    this.sel = sel;
    sel.addEventListener('change', function() {
      conversionResult.innerText = `Converted amount: ${
        sel.options[sel.selectedIndex].innerText
      }`;
       console.log(sel.value, sel.options[sel.selectedIndex].innerText);
    });
  }
}

class ShoppingCart {
  constructor(products) {
    this.products = products;
  }

  addProduct() {
    this.product.push(product);
  }

  removeProduct() {
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
    const result = '';
    
    productLI.innerText += `${flatscreen.name} ${flatscreen.price}`;
    productLI2.innerText += `${mac.name} ${mac.price}`;
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


document.addEventListener('DOMContentLoaded', () => {});
const flatscreen = new Product('flat-screen', 5000);
const mac = new Product('mac', 3000);
console.log(flatscreen, mac);

const shoppingCart = new ShoppingCart([flatscreen]);
console.log(shoppingCart);

const product = new Product();
product.convertCurrency();

shoppingCart.searchProduct();
shoppingCart.getUser();
shoppingCart.renderProducts();

