document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("signup-form").addEventListener("submit", function (e) {
        e.preventDefault();

        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirm-password").value;

        // Validation du mot de passe
        if (password !== confirmPassword) {
            alert("Les mots de passe ne correspondent pas !");
            return;
        }

        // Vérifier si l'utilisateur existe déjà
        let users = JSON.parse(localStorage.getItem("users")) || [];
        if (users.find(user => user.email === email)) {
            alert("Cet utilisateur existe déjà !");
            return;
        }

        // Ajouter l'utilisateur dans LocalStorage
        users.push({ email, password });
        localStorage.setItem("users", JSON.stringify(users));

        alert("Inscription réussie !");
        window.location.href = "connexion.html"; // Rediriger vers la page de connexion
    });
});
