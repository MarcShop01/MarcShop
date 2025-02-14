document.addEventListener("DOMContentLoaded", function () {
    // Vérifier si un utilisateur est connecté
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!loggedInUser) {
        alert("Vous devez être connecté pour accéder à l'administration.");
        window.location.href = "connexion.html"; // Redirige vers la page de connexion
        return;
    }

    // Afficher les produits dans l'administration
    let products = JSON.parse(localStorage.getItem("products")) || [];
    let productList = document.getElementById("product-list");

    products.forEach((product, index) => {
        let productDiv = document.createElement("div");
        productDiv.className = "product-item";
        productDiv.innerHTML = `
            <h4>${product.name}</h4>
            <p>${product.description}</p>
            <p><strong>Prix :</strong> ${product.price} $</p>
            <img src="${product.image}" alt="${product.name}" width="100">
            <button onclick="deleteProduct(${index})">Supprimer</button>
            <button onclick="editProduct(${index})">Modifier</button>
        `;
        productList.appendChild(productDiv);
    });

    // Fonction pour ajouter un produit
    let addProductForm = document.getElementById("add-product-form");
    addProductForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let name = document.getElementById("product-name").value;
        let description = document.getElementById("product-description").value;
        let price = document.getElementById("product-price").value;
        let image = document.getElementById("product-image").value;

        if (!name || !description || !price || !image) {
            alert("Veuillez remplir tous les champs !");
            return;
        }

        // Ajouter le produit dans LocalStorage
        products.push({ name, description, price, image });
        localStorage.setItem("products", JSON.stringify(products));

        // Réinitialiser le formulaire
        addProductForm.reset();

        // Rafraîchir la liste des produits
        window.location.reload();
    });
});

// Fonction pour supprimer un produit
function deleteProduct(index) {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    products.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(products));
    alert("Produit supprimé avec succès !");
    window.location.reload();
}

// Fonction pour modifier un produit
function editProduct(index) {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    let product = products[index];

    // Pré-remplir le formulaire avec les informations du produit
    document.getElementById("product-name").value = product.name;
    document.getElementById("product-description").value = product.description;
    document.getElementById("product-price").value = product.price;
    document.getElementById("product-image").value = product.image;

    // Modifier le produit après avoir modifié les valeurs
    let addProductForm = document.getElementById("add-product-form");
    addProductForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let name = document.getElementById("product-name").value;
        let description = document.getElementById("product-description").value;
        let price = document.getElementById("product-price").value;
        let image = document.getElementById("product-image").value;

        if (!name || !description || !price || !image) {
            alert("Veuillez remplir tous les champs !");
            return;
        }

        // Modifier le produit dans le tableau
        products[index] = { name, description, price, image };
        localStorage.setItem("products", JSON.stringify(products));

        // Réinitialiser le formulaire
        addProductForm.reset();

        // Rafraîchir la liste des produits
        window.location.reload();
    });
}