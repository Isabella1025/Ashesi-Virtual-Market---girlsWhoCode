// Updated Products Data with All Categories
const productsData = {
    "Food": [
        { name: "Vegetarian Pizza", description: "Fresh vegetables and cheese.", price: "GHC 40.00", image: "images/food1.jpg" },
        { name: "Pasta Bowl", description: "Creamy pasta with garlic and herbs.", price: "GHC 35.00", image: "images/food2.jpg" }
    ],
    "Snacks and Drinks": [
        { name: "Chocolate Bar", description: "Sweet and tasty chocolate bar.", price: "GHC 10.00", image: "images/snacks1.jpg" },
        { name: "Fresh Orange Juice", description: "Refreshing orange juice.", price: "GHC 15.00", image: "images/drinks1.jpg" }
    ],
    "Stationery": [
        { name: "Notebook Set", description: "A set of high-quality notebooks.", price: "GHC 20.00", image: "images/notebook.jpg" },
        { name: "Highlighter Pack", description: "Bright highlighters for study.", price: "GHC 15.00", image: "images/highlighters.jpg" }
    ],
    "Technology": [
        { name: "Wireless Mouse", description: "Ergonomic wireless mouse.", price: "GHC 50.00", image: "images/mouse.jpg" },
        { name: "Keyboard", description: "Mechanical keyboard for work.", price: "GHC 80.00", image: "images/keyboard.jpg" }
    ],
    "Room Decor": [
        { name: "Fairy Lights", description: "Beautiful fairy lights.", price: "GHC 25.00", image: "images/lights.jpg" },
        { name: "Decorative Cushion", description: "Soft and stylish cushions.", price: "GHC 30.00", image: "images/cushion.jpg" }
    ],
    "Cleaning Supplies": [
        { name: "Detergent", description: "Powerful laundry detergent.", price: "GHC 18.00", image: "images/detergent.jpg" },
        { name: "Broom Set", description: "Durable broom and dustpan.", price: "GHC 20.00", image: "images/broom.jpg" }
    ],
    "Clothing": [
        { name: "Denim Jacket", description: "Stylish denim jacket.", price: "GHC 100.00", image: "images/clothing1.jpg", sizes: ["S", "M", "L", "XL"] },
        { name: "Graphic T-Shirt", description: "Unique graphic T-shirt.", price: "GHC 50.00", image: "images/clothing2.jpg", sizes: ["S", "M", "L", "XL"] }
    ],
    "Accessories": [
        { name: "Silver Necklace", description: "Elegant silver necklace.", price: "GHC 50.00", image: "images/necklace.jpg" },
        { name: "Leather Wallet", description: "Premium leather wallet.", price: "GHC 60.00", image: "images/wallet.jpg" }
    ],
    "Footwear": [
        { name: "Running Shoes", description: "Durable running shoes.", price: "GHC 150.00", image: "images/shoes1.jpg", sizes: ["38", "39", "40", "41", "42"] },
        { name: "Sandals", description: "Comfortable summer sandals.", price: "GHC 80.00", image: "images/sandals.jpg", sizes: ["38", "39", "40", "41", "42"] }
    ]
};

// DOM Elements
const categoriesContainer = document.getElementById("categories");
const productsContainer = document.getElementById("products");

// Add event listener for category clicks
categoriesContainer.addEventListener("click", (e) => {
    const categoryCard = e.target.closest(".category-card");
    if (categoryCard) {
        const category = categoryCard.getAttribute("data-category");
        if (productsData[category]) {
            displayProducts(category);
        } else {
            alert("Category not found!"); // Error handling if category doesn't exist
        }
    }
});

// Display products for the selected category
function displayProducts(category) {
    productsContainer.innerHTML = "";
    productsContainer.style.display = "flex";
    categoriesContainer.style.display = "none";

    const products = productsData[category];
    products.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>${product.price}</p>
            ${product.sizes ? `
                <select class="product-size">
                    ${product.sizes.map(size => `<option value="${size}">${size}</option>`).join("")}
                </select>
            ` : ""}
            <input type="number" class="product-quantity" min="1" value="1">
            <button class="add-to-cart-btn">Add to Cart</button>
            <button class="add-to-wishlist-btn">Add to Wishlist</button>
        `;

        productsContainer.appendChild(productCard);

        const addToCartBtn = productCard.querySelector(".add-to-cart-btn");
        const addToWishlistBtn = productCard.querySelector(".add-to-wishlist-btn");

        addToCartBtn.addEventListener("click", () => addToCart(product));
        addToWishlistBtn.addEventListener("click", () => addToWishlist(product));
    });

    const backButton = document.createElement("button");
    backButton.textContent = "← Back to Categories";
    backButton.classList.add("back-btn");
    backButton.addEventListener("click", () => {
        productsContainer.style.display = "none";
        categoriesContainer.style.display = "grid";
    });
    productsContainer.appendChild(backButton);
}

// Add product to cart
function addToCart(product) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} has been added to your cart.`);
}

// Add product to wishlist
function addToWishlist(product) {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    wishlist.push(product);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    alert(`${product.name} has been added to your wishlist.`);
}