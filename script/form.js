document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formContato");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9\s\-()+]+$/;

        if (!name || !email || !phone || !message) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        if (!emailRegex.test(email)) {
            alert("Por favor, insira um email válido.");
            return;
        }

        if (!phoneRegex.test(phone)) {
            alert("Por favor, insira um número de telefone válido.");
            return;
        }

        form.submit();
    });
});