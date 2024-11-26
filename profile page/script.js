// Example data for the "Notify Me" list
const notifyItems = [
    {
        name: "Ana Bandage Gown - Red",
        image: "assets/images/red-dress.jpg",
        price: "$34.99",
        originalPrice: "$69.99",
        size: "S",
        requestDate: "Nov. 10, 2023"
    },
    {
        name: "Living For It Ribbed Midi Dress - Black",
        image: "assets/images/black-dress.jpg",
        price: "$9.98",
        originalPrice: "$39.99",
        size: "S",
        requestDate: "Dec. 5, 2022"
    }
];

// Function to load the "Notify Me" list
function loadNotifyList() {
    const list = document.querySelector('.notify-list');
    
    // Check if list container exists
    if (!list) return;

    notifyItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.classList.add('notify-item');
        listItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="notify-details">
                <h3>${item.name}</h3>
                <p>
                    <span class="price">${item.price}</span>
                    <span class="original-price">${item.originalPrice}</span>
                    <span class="value">Comp. Value</span>
                </p>
                <p class="size">${item.size}</p>
                <p class="request-date">Requested on ${item.requestDate}</p>
            </div>
            <button class="remove-button">
                <i class="fa-solid fa-trash"></i>
            </button>
        `;
        list.appendChild(listItem);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const notifyItems = []; // Currently empty for this design

    const container = document.getElementById('notification-container');

    if (notifyItems.length === 0) {
        // Display "No Notifications" message
        container.innerHTML = `
            <div class="no-notifications">
                <p>You don't have anything on your list yet. Start building your list and explore the styles that will be available soon.</p>
                <a href="cart.html" class="cart-button">cart styles coming soon</a>
            </div>
        `;
    } else {
        // Display Notify Me List items (not applicable here for empty state)
        const list = document.createElement('ul');
        list.className = 'notify-list';

        notifyItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.className = 'notify-item';
            listItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="notify-details">
                    <h3>${item.name}</h3>
                    <p>${item.price} <span class="original-price">${item.originalPrice}</span></p>
                </div>
            `;
            list.appendChild(listItem);
        });

        container.appendChild(list);
    }
});


// Example data for notifications
const notifications = [
    {
        title: 'Order Shipped',
        message: 'Your order #12345 has been shipped.',
        date: 'Nov 25, 2023'
    },
    {
        title: 'Price Drop Alert',
        message: 'An item in your wishlist is now on sale!',
        date: 'Nov 24, 2023'
    }
];

// Function to load notifications
function loadNotifications() {
    const container = document.getElementById('notification-container');

    // Check if container exists
    if (!container) return;

    if (notifications.length === 0) {
        // Display "No Notifications" message
        container.innerHTML = `
            <div class="no-notifications">
                <h2>You don't have any notifications yet</h2>
                <p>As soon as you get notifications, they will appear here!</p>
            </div>
        `;
    } else {
        // Display notifications list
        const list = document.createElement('ul');
        list.className = 'notification-list';

        notifications.forEach(notification => {
            const item = document.createElement('li');
            item.className = 'notification-item';
            item.innerHTML = `
                <h3>${notification.title}</h3>
                <p>${notification.message}</p>
                <p class="notification-date">${notification.date}</p>
            `;
            list.appendChild(item);
        });

        container.appendChild(list);
    }
}

// Load both Notify Me list and Notifications
document.addEventListener('DOMContentLoaded', () => {
    loadNotifyList();
    loadNotifications();
});
