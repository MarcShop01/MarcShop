document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Vérifier les identifiants
    let user = users.find(user => user.email === email && user.password === password);

    if (user) {
        // Enregistrer la session de l'utilisateur dans LocalStorage
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        alert("Connexion réussie !");
        window.location.href = "index.html"; // Rediriger vers la page d'accueil
    } else {
        alert("Identifiants incorrects !");
    }
});