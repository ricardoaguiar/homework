console.log("Script loaded");

const cartBtn = document.querySelector(".cart-btn");
const closeCartBtn = document.querySelector(".close-cart");
const clearCartBtn = document.querySelector(".clear-cart");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const productDOM = document.querySelector(".products");
const productUL = document.querySelector("section.products ul");
const productLI = document.createElement("li");
const p = document.createElement("p");

let cart = [];
let buttonsDOM = [];

const convertedCur = document.getElementById("converted-currency");
const conversionResult = document.createElement("p");
convertedCur.appendChild(conversionResult); //display the converted result on option change

class Products {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  async getProducts() {
    try {
      let res = await fetch("products.json");
      let data = await res.json();
      let products = data.items;
      products = products.map(item => {
        const { id, name, price, imgUrl } = item;
        return { id, name, price, imgUrl };
      });
      return products;
    } catch (error) {
      console.log(error);
    }
  }
}

class ShoppingCart {
  constructor(cartProducts) {
    this.cartProducts = cartProducts;
  }

  addProduct() {
    this.product.push(product);
  }

  removeProduct() {
    const selProduct = product;
  }

  searchProduct() {}

  getTotal() {
    // const total = products.map(product => product.price);
    // let sum = 0;
    // for (let i = 0; i < total.length; i++) {
    //   sum += total[i];
    // }
    // document.getElementById("total").innerHTML = sum;
  }
  renderProducts(products) {
    console.log(products);
    let result = "";
    products.forEach(product => {
      result += `
      <article class="product">
                <div class="img-container"><img src=${product.imgUrl} alt="product" class="product-img">
                </div>
                <button class="bag-btn" data-id=${product.id}><i class="fas fa-shopping-cart"></i>add to cart</button>
                <h3>${product.name}</h3>
                <h4>$${product.price}</h4>
            </article>    
      `;
    });
    productDOM.innerHTML = result;
  }
  getCartButton() {
    const cartButtons = [...document.querySelectorAll(".bag-btn")];
    buttonsDOM = cartButtons;
    cartButtons.forEach(button => {
      let id = button.dataset.id;
      let inCart = cart.find(item => item.id === id);
      if (inCart) {
        button.innerText = "In Cart";
        button.disable = true;
      }
      button.addEventListener("click", event => {
        event.target.innerText = "In Cart";
        event.target.disable = true;
        //get products
        let cartItem = { ...Storage.getProduct(id), amount: 1 };
        //add product to the cart
        cart = [...cart, cartItem];
        //save cart in local storage
        Storage.saveCart(cart);
        //set cart values
        this.setCartValues(cart);
        //display cart items
        //show the cart
      });
    });
  }

  setCartValues(cart) {
    let tmpTotal = 0;
    let itemsTotal = 0;
    cart.map(item => {
      tmpTotal += item.price * item.amount;
      itemsTotal += item.amount;
    });
    cartTotal.innerText = parseFloat(tmpTotal.toFixed(2));
    cartItems.innerText = itemsTotal;
    console.log(cartTotal, cartItems);
  }
  convertCurrency() {
    this.sel = sel;
    sel.addEventListener("change", function() {
      conversionResult.innerText = `Converted amount: ${
        sel.options[sel.selectedIndex].innerText
      }`;
      console.log(sel.value, sel.options[sel.selectedIndex].innerText);
    });
  }

  getUser() {
    const user = document.getElementById("user");
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then(r => r.json())
      .then(data => {
        console.log(data.name);
        user.innerText = `Welcome ${data.name}`;
      });
  }
}

class Storage {
  static saveProducts(products) {
    localStorage.setItem("products", JSON.stringify(products));
  }
  static getProduct(id) {
    let products = JSON.parse(localStorage.getItem("products"));
    return products.find(product => product.id === id);
  }
  static saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const mac = new Products("mac", 3000);
  const flatscreen = new Products("flat-screen", 5000);
  console.log(mac, flatscreen);

  const shoppingCart = new ShoppingCart();
  const products = new Products();

  products
    .getProducts()
    .then(products => {
      shoppingCart.renderProducts(products);
      Storage.saveProducts(products);
    })
    .then(() => {
      shoppingCart.getCartButton();
    });

  // shoppingCart.convertCurrency();
  // shoppingCart.searchProduct();
  shoppingCart.getUser();
  // shoppingCart.getTotal();
});
