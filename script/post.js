document.getElementById('formContato').addEventListener('submit', async function (e) {
  e.preventDefault();

  const data = {
    nome: document.getElementById('nome').value,
    email: document.getElementById('email').value,
    telefone: document.getElementById('telefone').value,
    mensagem: document.getElementById('mensagem').value,
  };

  try {
    const response = await fetch('http://localhost:8080/api/contato', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("Mensagem enviada com sucesso!");
      document.getElementById('formContato').reset();
    } else {
      const err = await response.text();
      console.error('Erro:', err);
      alert("Erro ao enviar mensagem.");
    }
  } catch (error) {
    console.error('Erro de rede:', error);
    alert("Erro ao conectar com o servidor.");
  }
});
