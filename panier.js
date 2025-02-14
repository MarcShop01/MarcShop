document.addEventListener("DOMContentLoaded", function () {
    const cartList = document.getElementById("cart-list");
    const totalPriceElement = document.getElementById("total-price");

    function getCart() {
        return localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
    }

    function saveCart(cart) {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    function displayCart() {
        let cart = getCart();
        cartList.innerHTML = "";
        let totalPrice = 0;

        if (cart.length === 0) {
            cartList.innerHTML = "<li>Votre panier est vide.</li>";
            totalPriceElement.textContent = "Total: 0 $";
            return;
        }

        cart.forEach((product, index) => {
            let listItem = document.createElement("li");
            listItem.innerHTML = `
    <div class="product">
        <h3>${product.name}</h3>
        <p>Prix : ${product.price} $</p>
    </div>
`;

listItem.innerHTML = `
<div class="product">
    ${product.name} - ${product.price} $ x
</div>
`;

                <input type="number" min="1" value="${product.quantity}" onchange="updateQuantity(${index}, this.value)">
                <button onclick="removeFromCart(${index})">Retirer</button>
            `;
            cartList.appendChild(listItem);
            totalPrice += product.price * product.quantity;
        });

        totalPriceElement.textContent = Total: ${totalPrice} $;

    }

    function updateQuantity(index, newQuantity) {
        let cart = getCart();
        cart[index].quantity = parseInt(newQuantity);
        saveCart(cart);
        displayCart();
    }

    function removeFromCart(index) {
        let cart = getCart();
        cart.splice(index, 1);
        saveCart(cart);
        displayCart();
    }

    function clearCart() {
        localStorage.removeItem("cart");
        displayCart();
    }

    function checkout() {
        let cart = getCart();
        if (cart.length === 0) {
            alert("Votre panier est vide !");
            return;
        }
        saveOrder();
    }

    function saveOrder() {
        let cart = getCart();
        let orders = localStorage.getItem("orders") ? JSON.parse(localStorage.getItem("orders")) : [];
        let newOrder = {
            id: orders.length + 1,
            products: cart,
            total: cart.reduce((sum, p) => sum + p.price * p.quantity, 0),
            status: "En cours de traitement"
        };

        orders.push(newOrder);
        localStorage.setItem("orders", JSON.stringify(orders));
        clearCart();
        alert("Commande enregistrée !");
        window.location.href = "suivie.html";
    }

    window.updateQuantity = updateQuantity;
    window.removeFromCart = removeFromCart;
    window.clearCart = clearCart;
    window.checkout = checkout;

    displayCart();
});function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}function getCart() {
    return localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
}function saveOrder() {
    let cart = getCart();
    let orders = localStorage.getItem("orders") ? JSON.parse(localStorage.getItem("orders")) : [];
    let newOrder = {
        id: orders.length + 1,
        products: cart,
        total: cart.reduce((sum, p) => sum + p.price * p.quantity, 0),
        status: "En cours de traitement"
    };

    orders.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(orders));
    clearCart();
    alert("Commande enregistrée !");
}document.addEventListener("DOMContentLoaded", function () {
    const cartList = document.getElementById("cart-list");
    const totalPriceElement = document.getElementById("total-price");

    function getCart() {
        return localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
    }

    function saveCart(cart) {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    function displayCart() {
        let cart = getCart();
        cartList.innerHTML = "";
        let totalPrice = 0;

        if (cart.length === 0) {
            cartList.innerHTML = "<li>Votre panier est vide.</li>";
            totalPriceElement.textContent = "Total: 0 $";
            return;
        }

        cart.forEach((product, index) => {
            let listItem = document.createElement("li");
            listItem.innerHTML = `
    <div class="product">
        <h3>${product.name}</h3>
        <p>Prix : ${product.price} $</p>
    </div>
`;

listItem.innerHTML = `
<div class="product">
    ${product.name} - ${product.price} $ x
</div>
`;

                <input type="number" min="1" value="${product.quantity}" onchange="updateQuantity(${index}, this.value)">
                <button onclick="removeFromCart(${index})">Retirer</button>
            `;
            cartList.appendChild(listItem);
            totalPrice += product.price * product.quantity;
        });

        totalPriceElement.textContent = Total: ${totalPrice} $;

    }

    function updateQuantity(index, newQuantity) {
        let cart = getCart();
        cart[index].quantity = parseInt(newQuantity);
        saveCart(cart);
        displayCart();
    }

    function removeFromCart(index) {
        let cart = getCart();
        cart.splice(index, 1);
        saveCart(cart);
        displayCart();
    }

    function clearCart() {
        localStorage.removeItem("cart");
        displayCart();
    }

    function checkout() {
        let cart = getCart();
        if (cart.length === 0) {
            alert("Votre panier est vide !");
            return;
        }
        saveOrder();
    }

    function saveOrder() {
        let cart = getCart();
        let orders = localStorage.getItem("orders") ? JSON.parse(localStorage.getItem("orders")) : [];
        let newOrder = {
            id: orders.length + 1,
            products: cart,
            total: cart.reduce((sum, p) => sum + p.price * p.quantity, 0),
            status: "En cours de traitement"
        };

        orders.push(newOrder);
        localStorage.setItem("orders", JSON.stringify(orders));
        clearCart();
        alert("Commande enregistrée !");
        window.location.href = "suivie.html";
    }

    window.updateQuantity = updateQuantity;
    window.removeFromCart = removeFromCart;
    window.clearCart = clearCart;
    window.checkout = checkout;

    displayCart();
});function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}function getCart() {
    return localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
}function saveOrder() {
    let cart = getCart();
    let orders = localStorage.getItem("orders") ? JSON.parse(localStorage.getItem("orders")) : [];
    let newOrder = {
        id: orders.length + 1,
        products: cart,
        total: cart.reduce((sum, p) => sum + p.price * p.quantity, 0),
        status: "En cours de traitement"
    };

    orders.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(orders));
    clearCart();
    alert("Commande enregistrée !");
}