document.addEventListener("DOMContentLoaded", () => {
    fetchProducts();
});

async function fetchProducts() {
    // Replace with your own API URL or PHP script to fetch products from the database.
    const response = await fetch("api/products.php");
    const products = await response.json();
    displayProducts(products);
}

function displayProducts(products) {
    const productsContainer = document.querySelector(".products");

    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <img src="${product.image}" alt="${product.name}" width="150" height="150">
            <p>Price: $${product.price}</p>
            <button>Add to Cart</button>
        `;
        productsContainer.appendChild(productDiv);
    });
}
