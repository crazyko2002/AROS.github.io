document.addEventListener("DOMContentLoaded", () => {
    displayCartItems();
});

function displayCartItems() {
    const cartItems = getCartItemsFromStorage();
    const cartItemsContainer = document.querySelector("tbody");
    let total = 0;

cartItems.forEach(item => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${item.name}</td>
        <td>$${item.price}</td>
        <td>${item.quantity}</td>
        <td>$${item.price * item.quantity}</td>
        <td>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        </td>
    `;

    total += item.price * item.quantity;
    cartItemsContainer.appendChild(tr);
});

document.querySelector("#cart-total").textContent = total.toFixed(2);
}

function getCartItemsFromStorage() {
    const cartItems = localStorage.getItem("cart");
    return cartItems ? JSON.parse(cartItems) : [];
    }
    
    function removeFromCart(productId) {
    const cartItems = getCartItemsFromStorage();
    const updatedCartItems = cartItems.filter(item => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
displayCartItems();

}

// Add this to product.js
function addToCart(productId) {
const cartItems = getCartItemsFromStorage();
const existingItem = cartItems.find(item => item.id === productId);
if (existingItem) {
    existingItem.quantity += 1;
} else {
    const newItem = {
        id: productId,
        name: "Product Name", // Replace with actual product name
        price: 100, // Replace with actual product price
        quantity: 1
    };
    cartItems.push(newItem);
}

localStorage.setItem("cart", JSON.stringify(cartItems));
}
