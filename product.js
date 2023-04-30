document.addEventListener("DOMContentLoaded", () => {
    const productId = getProductIdFromUrl();
    fetchProduct(productId);
});

function getProductIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("id");
}

async function fetchProduct(id) {
    // Replace with your own API URL or PHP script to fetch a single product from the database.
    const response = await fetch(`api/product.php?id=${id}`);
    const product = await response.json();
    displayProduct(product);
}

function displayProduct(product) {
    const productDetails = document.querySelector(".product-details");
    productDetails.innerHTML = `
        <h2>${product.name}</h2>
        <img src="${product.image}" alt="${product.name}" width="300" height="300">
        <p>Price: $${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
}

function addToCart(productId) {
    // Implement the logic to add the product to the cart.
}
