document.addEventListener("DOMContentLoaded", function () {
    console.log("Chargement des produits...");

    let products = JSON.parse(localStorage.getItem("products")) || [];

    if (products.length === 0) {
        console.log("Aucun produit trouvé dans LocalStorage. Chargement depuis produits.json...");
        fetch("produits.json")
            .then(response => response.json())
            .then(data => {
                console.log("Produits chargés depuis JSON :", data);
                localStorage.setItem("products", JSON.stringify(data));
                afficherProduits(data);
            })
            .catch(error => console.error("Erreur lors du chargement des produits :", error));
    } else {
        console.log("Produits trouvés dans LocalStorage :", products);
        afficherProduits(products);
    }

    function afficherProduits(products) {
        const productContainer = document.getElementById("products-container");
        productContainer.innerHTML = "";

        if (products.length === 0) {
            productContainer.innerHTML = "<p>Aucun produit disponible.</p>";
            return;
        }

        products.forEach(product => {
            const productDiv = document.createElement("div");
            productDiv.className = "product";

            const imageUrl = product.image || "default-image.jpg"; 

            productDiv.innerHTML = `
                <img src="${imageUrl}" alt="${product.name}" class="product-image">
                <h3>${product.name}</h3>
                <p>Prix : ${product.price} $</p>
                  <!-- Sélection de la couleur -->
    <label for="couleur">Couleur :</label>
    <select class="couleur">
        <option value="">Choisir une couleur</option>
        <option value="Noir">Noir</option>
        <option value="Blanc">Blanc</option>
        <option value="Bleu">Bleu</option>
        <option value="Rouge">Rouge</option>
         <option value="Mauve">Mauve</option>
         <option value="Vert">Vert</option>
        <option value="Jaune">Jaune</option>
         <option value=Multicolore"">Multicolore</option>
    </select>option>
    <!-- Sélection de la Size -->
    <label for="Size">Size :</label>
    <select class="Size">
        <option value="">Choisir une Size</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
    </select>


    <!-- Sélection d'une autre mesure (ex: ceinture, pointure, etc.) -->
    <label for="mesure">Mesure :</label>
    <select class="mesure">
        <option value="">Choisir une mesure</option>
        <option value="38">38</option>
        <option value="32">39</option>
        <option value="34">40</option>
        <option value="36">41</option>
        <option value="38">42</option>
        <option value="38">43</option>
        <option value="38">44</option>
        <option value="38">45</option>
        <option value="38">46</option>
    </select>
<label for="quantity">Quantité :</label>
<select id="quantity" class="quantity-selector" data-product-id="PRODUCT_ID">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
</select>
                <button class="add-to-cart" data-id="${product.id}">Ajouter au panier</button>
            `;

            productContainer.appendChild(productDiv);
        });

        document.querySelectorAll(".add-to-cart").forEach(button => {
            button.addEventListener("click", function () {
                const productId = parseInt(this.getAttribute("data-id"));
                addToCart(productId);
            });
        });
    }

    function addToCart(productId) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let product = products.find(p => p.id === productId);

        if (product) {
            cart.push(product);
            localStorage.setItem("cart", JSON.stringify(cart));
            alert(`${product.name} ajouté au panier !`);

  
        }
    }
});