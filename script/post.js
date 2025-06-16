document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formContato");

    form.addEventListener("submit", async function (e) {
        e.preventDefault();

        const data = {
            name: form.name.value,
            email: form.email.value,
            phone: form.phone.value,
            message: form.message.value,
        };

        try {
            const response = await fetch("https://SEU-BACKEND-DEPLOYADO/api/email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                alert("Mensagem enviada com sucesso!");
                form.reset();
            } else {
                console.log('Erro ao enviar. Tente novamente mais tarde.')
            }
        } catch (error) {
            console.error("Erro na requisição:", error);
        }
    });
});
