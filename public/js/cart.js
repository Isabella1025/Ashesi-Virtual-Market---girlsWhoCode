// Select necessary elements
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');

// Function to calculate and update the total
function updateCartTotal() {
    let total = 0;

    // Loop through all cart items
    const cartItems = document.querySelectorAll('.cart-item');
    cartItems.forEach((item) => {
        const price = parseFloat(item.getAttribute('data-price')); // Get item price
        const quantity = parseInt(item.querySelector('.item-quantity').value); // Get item quantity
        total += price * quantity; // Add to total
    });

    // Update total in the DOM
    cartTotalElement.textContent = `GHC ${total.toFixed(2)}`;
}

// Function to remove a cart item
function removeCartItem(event) {
    const button = event.target;
    const cartItem = button.closest('.cart-item'); // Find the parent .cart-item
    cartItem.remove(); // Remove the item from the DOM
    updateCartTotal(); // Update the total
}

// Add event listeners for quantity changes
const quantityInputs = document.querySelectorAll('.item-quantity');
quantityInputs.forEach((input) => {
    input.addEventListener('change', (event) => {
        // Prevent invalid values
        if (event.target.value <= 0) {
            event.target.value = 1;
        }
        updateCartTotal(); // Recalculate the total
    });
});

// Add event listeners for remove buttons
const removeButtons = document.querySelectorAll('.remove-btn');
removeButtons.forEach((button) => {
    button.addEventListener('click', removeCartItem);
});

// Initial total calculation
updateCartTotal();
