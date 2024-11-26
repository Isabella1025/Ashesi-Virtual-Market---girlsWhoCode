document.addEventListener('DOMContentLoaded', () => {
    // Example data: replace these with fetched data or dynamic data from a server
    const ordersData = {
        pendingOrders: [], // Example: ['Order #12345 - Waiting for Confirmation']
        ordersInTransit: [], // Example: ['Order #12346 - Out for Delivery']
        oldOrders: [] // Example: ['Order #12344 - Delivered on Nov 20']
    };

    // Function to update a section
    const updateSection = (sectionClass, orders) => {
        const section = document.querySelector(`.${sectionClass} .order-buttons`);
        section.innerHTML = ''; // Clear existing content

        if (orders.length === 0) {
            const noOrdersMessage = document.createElement('p');
            noOrdersMessage.className = 'no-orders-message';

            if (sectionClass === 'pending-orders') {
                noOrdersMessage.textContent = 'No pending orders yet.';
            } else if (sectionClass === 'orders-in-transit') {
                noOrdersMessage.textContent = 'No orders in transit yet.';
            } else if (sectionClass === 'old-orders') {
                noOrdersMessage.textContent = 'No old orders yet.';
            }

            section.appendChild(noOrdersMessage);
        } else {
            orders.forEach(order => {
                const button = document.createElement('button');
                button.className = 'order-button';
                button.textContent = order;
                section.appendChild(button);
            });
        }
    };

    // Update sections
    updateSection('pending-orders', ordersData.pendingOrders);
    updateSection('orders-in-transit', ordersData.ordersInTransit);
    updateSection('old-orders', ordersData.oldOrders);
});
