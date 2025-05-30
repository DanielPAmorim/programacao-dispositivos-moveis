fetch('http://localhost:3000/contatos')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Erro:', error));

  fetch('http://localhost:3000/contatos/1a2b')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Erro:', error));

  fetch('http://localhost:3000/contatos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nome: 'Joao',
      telefone: '97777-7777'
    })
  })
    .then(response => response.json())
    .then(data => console.log('Contato adicionado:', data))
    .catch(error => console.error('Erro:', error));

    fetch('http://localhost:3000/contatos/1a2b', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nome: 'Jose Junior',
          telefone: '96666-6666'
        })
      })
        .then(response => response.json())
        .then(data => console.log('Contato atualizado:', data))
        .catch(error => console.error('Erro:', error));

        fetch('http://localhost:3000/contatos/1a2b', {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            },
          })
            .then(response => response.json())
            .then(data => console.log('Contato removido:', data))
            .catch(error => console.error('Erro:', error));
          
