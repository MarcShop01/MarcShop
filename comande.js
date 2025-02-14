let orders = JSON.parse(localStorage.getItem("orders")) || [];

let newOrder = {
    id: "12345", // Un numéro de commande unique généré
    status: "En préparation", // L'état de la commande
    date: new Date().toLocaleDateString(), // Date de la commande
    items: [{ productName: "T-shirt", quantity: 2, price: 20 }],
    total: 40 // Total de la commande
};

// Ajouter la nouvelle commande à la liste
orders.push(newOrder);
localStorage.setItem("orders", JSON.stringify(orders));// Fonction pour générer un ID unique
function generateOrderId() {
    return 'ORD' + Date.now() + Math.floor(Math.random() * 1000);
}// Récupérer les commandes existantes
let orders = JSON.parse(localStorage.getItem("orders")) || [];

// Créer une nouvelle commande avec un ID unique
let newOrder = {
    id: generateOrderId(), // Générer un numéro de commande unique
    status: "En préparation", // L'état de la commande
    date: new Date().toLocaleDateString(), // Date de la commande
    items: [{ productName: "T-shirt", quantity: 2, price: 20 }], // Produits dans la commande
    total: 40 // Total de la commande
};

// Ajouter la nouvelle commande à la liste des commandes
orders.push(newOrder);

// Enregistrer la liste mise à jour dans LocalStorage
localStorage.setItem("orders", JSON.stringify(orders));

console.log("Commande ajoutée avec succès", newOrder);