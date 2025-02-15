document.addEventListener("DOMContentLoaded", function () {
    let urlParams = new URLSearchParams(window.location.search);
    let token = urlParams.get("token");

    if (!token) {
        document.getElementById("message").textContent = "Lien invalide.";
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let user = users.find(user => user.confirmationToken === token);

    if (user) {
        user.confirmed = true;
        user.confirmationToken = null;

        localStorage.setItem("users", JSON.stringify(users));

        document.getElementById("message").textContent = "Votre compte a été confirmé avec succès ! Vous pouvez maintenant vous connecter.";
        setTimeout(() => {
            window.location.href = "connexion.html";
        }, 3000);
    } else {
        document.getElementById("message").textContent = "Lien invalide ou déjà utilisé.";
    }
});