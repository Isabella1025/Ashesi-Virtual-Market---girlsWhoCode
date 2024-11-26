// Select wishlist container
const wishlistItemsContainer = document.getElementById('wishlist-items');

// Function to remove an item from the wishlist
function removeWishlistItem(event) {
    const button = event.target;
    const wishlistItem = button.closest('.wishlist-item');
    wishlistItem.remove(); // Remove the item from the DOM
}

// Function to move an item to the cart
function moveToCart(event) {
    const button = event.target;
    const wishlistItem = button.closest('.wishlist-item');
    const productName = wishlistItem.querySelector('h3').textContent;
    alert(`${productName} has been moved to your cart!`);
    wishlistItem.remove(); // Remove the item from the wishlist
}

// Add event listeners for "Remove" buttons
const removeButtons = document.querySelectorAll('.remove-btn');
removeButtons.forEach((button) => {
    button.addEventListener('click', removeWishlistItem);
});

// Add event listeners for "Move to Cart" buttons
const moveToCartButtons = document.querySelectorAll('.move-to-cart');
moveToCartButtons.forEach((button) => {
    button.addEventListener('click', moveToCart);
});
