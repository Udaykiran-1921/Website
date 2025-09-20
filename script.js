

var products = [
  { id: 1, name: "Shoes", price: 250, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXxlbnwwfHwwfHx8MA%3D%3D" },
  { id: 2, name: "Watch", price: 240, img: "https://m.media-amazon.com/images/I/61n0aVXta7L._UY1000_.jpg" },
  { id: 3, name: "Backpack", price: 450, img: "https://safaribags.com/cdn/shop/files/3_4bde5165-92cd-4305-b571-dea21fe6568e.jpg?v=1707731843" },
  { id: 4, name: "Headphones", price: 120, img: "https://cdn.thewirecutter.com/wp-content/media/2023/07/bluetoothheadphones-2048px-0876.jpg" },
{ id: 5, name: "bat", price: 1100, img: "https://cdnmedia.dsc-cricket.com/media/catalog/product/cache/5b0ea239e50527b43e3253a7f103e237/d/s/dsc-cricket-blu--english-willow-player-edition-bat-bat-2.webp" },
  { id: 6, name: "shettle bat", price: 300, img: "https://3.imimg.com/data3/TF/UU/MY-3304204/dunlop-shuttle-racket.jpeg" },
  { id: 7, name: "hand bag", price: 1500, img: "https://www.soosi.co.in/cdn/shop/products/WhatsApp_Image_2019-12-22_at_18.16.01.jpg?v=1577469125" },
  { id: 8, name: "speaker", price: 500, img: "https://static-01.daraz.com.bd/p/85bb1a121eb8850e07535b77a4d53ee3.png" }

];

// Sign Up Logic
if (document.getElementById("signupForm")) {
  document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Save user data in localStorage
    const user = { username, email, password };
    localStorage.setItem("user", JSON.stringify(user));

    alert("✅ Sign up successful! You can now start shopping.");
    window.location.href = "index.html"; // redirect to home
  });
}


let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Display products on Shop Page
if (document.getElementById("products")) {
  const container = document.getElementById("products");
  products.forEach(p => {
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>Rs.${p.price}</p>
      <button class="btn" onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    container.appendChild(div);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  saveCart();
  alert(product.name + " added to cart!");
}

// Show cart on Cart Page
if (document.getElementById("cart-items")) {
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    cartItems.innerHTML += `
      <li style="display: flex; align-items: center; margin-bottom: 10px;">
        <img src="${item.img}" 
             alt="${item.name}" 
             style="width:100px; height:100px; object-fit:cover; border-radius:5px; margin-right:10px;">
        <span>${item.name} - $${item.price}</span>
        <button onclick="removeFromCart(${index})" style="margin-left:auto;">❌</button>
      </li>
    `;
  });

  document.getElementById("total").innerText = total;
}


function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  updateCart();
}

// Checkout
// Checkout
if (document.getElementById("checkout")) {
  document.getElementById("checkout").addEventListener("click", () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      window.location.href = "index.html"; // 👉 Redirect to Home Page
    } else {
      alert("✅ Checkout successful!");
      cart = [];
      saveCart();
      updateCart();
      window.location.href = "index.html"; // 👉 Redirect to Home Page
    }
  });
}

 document.addEventListener("DOMContentLoaded", function() {
    let currentPage = window.location.pathname.split("/").pop(); // get current file name
    let links = document.querySelectorAll("header nav a");

    links.forEach(link => {
      if(link.getAttribute("href") === currentPage || (currentPage === "" && link.getAttribute("href") === "#")) {
        link.classList.add("active");
      }
    });
  });
