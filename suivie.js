document.getElementById("order-tracking-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Récupérer le numéro de commande saisi par l'utilisateur
    let orderId = document.getElementById("order-id").value;

    // Récupérer les commandes depuis LocalStorage
    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    // Chercher la commande par son ID
    let order = orders.find(order => order.id === orderId);

    // Si la commande existe, afficher son statut
    if (order) {
        document.getElementById("order-status").style.display = "block";
        document.getElementById("order-message").textContent = `Commande #${order.id} : ${order.status}`;

    } else {
        alert("Commande introuvable !");
    }
});