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

  // product section
  renderProducts(products) {
    console.log(products);
    let result = "";
    products.forEach(product => {
      result += `
      <article class="product">
                <div class="img-container">
                <img src=${product.imgUrl} alt="product" class="product-img">
                </div>
                <button class="bag-btn" data-id=${product.id}>
                <i class="fas fa-shopping-cart"></i>add to cart</button>
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
        this.getCartTotal(cart);
        //display cart items
        this.addToCart(cartItem);
        //show the cart
        this.showCart();
      });
    });
  }

  getCartTotal(cart) {
    let tmpTotal = 0;
    let itemsTotal = 0;
    cart.map(item => {
      tmpTotal += item.price * item.amount;
      itemsTotal += item.amount;
    });
    cartTotal.innerText = parseFloat(tmpTotal.toFixed(2));
    cartItems.innerText = itemsTotal;
  }
  addToCart(item) {
    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
              <img src=${item.imgUrl} alt="photo" class="product-img-cart" />
              <div>
                <h5>${item.name}</h5>
                <h5>$${item.price}<h5>
                <button type=button" class="btn btn-outline-danger btn-sm remove-item" data-id=${item.id}>remove</button>
              </div>
              <div class="cart-item-amount">
               <i class="fas fa-chevron-up" data-id=${item.id}></i>
                <p class="c-item-f item-amount">${item.amount}</p>
                <i class="fas fa-chevron-down" data-id=${item.id}></i>
                </div>`;
    cartContent.appendChild(div);
    console.log(cartContent);
  }
  showCart() {
    cartOverlay.classList.add("transparentBcg");
    cartDOM.classList.add("showCart");
  }
  setupApp() {
    cart = Storage.getCart();
    this.getCartTotal(cart);
    this.populateCart(cart);
    cartBtn.addEventListener("click", this.showCart);
    closeCartBtn.addEventListener("click", this.hideCart);
  }
  populateCart(cart) {
    cart.forEach(item => this.addToCart(item));
  }
  hideCart() {
    cartOverlay.classList.remove("cart-overlay");
    cartDOM.classList.remove("showCart");
  }
  cartLogic() {
    clearCartBtn.addEventListener("click", () => {
      this.clearCart();
    });
    cartContent.addEventListener("click", event => {
      if (event.target.classList.contains("remove-item")) {
        let removeItem = event.target;
        let id = removeItem.dataset.id;
        cartContent.removeChild(
          removeItem.parentElement.parentElement.parentElement.parentElement
        );
        this.removeItem(id);
      } else if (event.target.classList.contains("fa-chevron-up")) {
        let addAmount = event.target;
        let id = addAmount.dataset.id;
        let tempItem = cart.find(item => item.id === id);
        tempItem.amount = tempItem.amount + 1;
        //tempItem.amount++;
        Storage.saveCart(cart);
        this.addToCart(cart);
        addAmount.nextElementSibling.innerText = tempItem.amount;
      } else if (event.target.classList.contains("fa-chevron-down")) {
        let lowerAmount = event.target;
        let id = lowerAmount.dataset.id;
        let tempItem = cart.find(item => item.id === id);
        tempItem.amount = tempItem.amount - 1;
        Storage.saveCart(cart);
        this.addToCart(cart);
        lowerAmount.previousElementSibling.innerText = tempItem.amount;
        if (tempItem.amount > 0) {
        } else {
          cartContent.removeChild(
            lowerAmount.parentElement.parentElement.parentElement.parentElement
          );
          this.removeChild(id);
        }
      }
    });
  }
  clearCart() {
    let cartItems = cart.map(item => item.id);
    cartItems.forEach(id => this.removeItem(id));
    while (cartContent.parentElement.children.lenght > 0) {
      cartContent.removeChild(cartContent.parentElement.children[0]);
    }
    this.hideCart();
  }
  removeItem(id) {
    cart = cart.filter(item => item.id !== id);
    this.getCartTotal(cart);
    Storage.saveCart(cart);
    let button = this.getSingleButton(id);
    button.disable = false;
    button.innerHTML = `<i class="fas fa-shopping-cart"></i>add to cart`;
  }
  getSingleButton(id) {
    return buttonsDOM.find(button => button.dataset.id === id);
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
  static getCart() {
    return localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const mac = new Products("mac", 3000);
  const flatscreen = new Products("flat-screen", 5000);
  console.log(mac, flatscreen);

  const shoppingCart = new ShoppingCart();
  const products = new Products();
  // shoppingCart.setupApp();

  products
    .getProducts()
    .then(products => {
      shoppingCart.renderProducts(products);
      Storage.saveProducts(products);
    })
    .then(() => {
      shoppingCart.getCartButton();
      shoppingCart.cartLogic();
    });

  // shoppingCart.convertCurrency();
  // shoppingCart.searchProduct();
  shoppingCart.getUser();
});
