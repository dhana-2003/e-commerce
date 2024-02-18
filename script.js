const products = [
    { id: 1, name: 'TOPS', price: 19.99,image:'images/top.png' },
    { id: 2, name: 'Body Care', price: 29.99 ,image:'images/body care.png'},
    { id: 3, name: 'makeup items', price: 39.99 ,image:'images/makeup items.png'},
    { id: 4, name: 'covers', price: 49.99 ,image:'images/covers.png'},
    { id: 5, name: 'watch', price: 59.99 ,image:'images/watch.png'},
    { id: 6, name: 'spects', price: 69.99 ,image:'images/spects.png'},
    { id: 7, name: 'hand bag', price: 79.99 ,image:'images/hand bag.png'},
    { id: 8, name: 'shoes', price: 89.99 ,image:'images/shoes.png'},
    { id: 9, name: 'soft toys', price: 99.99 ,image:'images/soft toys.png'},
    { id: 10, name: 'Pots', price: 109.99 ,image:'images/pots.png' },
    { id: 11, name: 'jewellery', price: 119.99 ,image:'images/jewellery.png'},
    { id: 12, name: 'cups', price: 129.99 ,image:'images/cups.png'},
    { id: 13, name: 'pen', price: 139.99 ,image:'images/pen.png'},
    { id: 14, name: 'guitar', price: 149.99 ,image:'images/guitar.png'},
    { id: 15, name: 'belt', price: 159.99 ,image:'images/belt.png'}
    // Add more products if needed
];

let cart = [];

function renderProducts() {
    const productListElement = document.getElementById('product-list');
    productListElement.innerHTML = products.map(product => `
        <div class="product">
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `).join('');
}

function addToCart(productId) {
    const productToAdd = products.find(product => product.id === productId);
    cart.push({ ...productToAdd });
    updateCart();
}

function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    let total = 0;

    // Clear existing items
    cartItemsElement.innerHTML = '';

    // Populate cart items
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsElement.appendChild(listItem);

        // Update total
        total += item.price;
    });

    // Update total element
    totalElement.textContent = total.toFixed(2);
}

function checkout() {
    alert('Checkout functionality needs to be implemented on the server side.');
}

function showHome() {
    hideAllSections();
    document.getElementById('home').style.display = 'block';
}

function showProducts() {
    hideAllSections();
    document.getElementById('product-list').style.display = 'block';
    renderProducts();
}

function showCart() {
    hideAllSections();
    document.getElementById('cart').style.display = 'block';
    updateCart();
}

function hideAllSections() {
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
}

// Initial rendering of home section
showHome();



