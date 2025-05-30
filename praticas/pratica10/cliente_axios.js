const axios = require('axios');

axios.get('http://localhost:3000/contatos')
  .then(response => console.log(response.data))
  .catch(error => console.error('Erro:', error));

  axios.get('http://localhost:3000/contatos/3c4d')
  .then(response => console.log(response.data))
  .catch(error => console.error('Erro:', error));

  axios.post('http://localhost:3000/contatos', {
    nome: 'Pedro',
    telefone: '95555-5555'
  })
    .then(response => console.log('Contato adicionado:', response.data))
    .catch(error => console.error('Erro:', error));

    axios.put('http://localhost:3000/contatos/3c4d', {
        nome: 'Maria Madalena',
        telefone: '99999-9999'
      })
        .then(response => console.log('Contato atualizado:', response.data))
        .catch(error => console.error('Erro:', error));

        axios.delete('http://localhost:3000/contatos/3c4d')
  .then(response => console.log(response.data))
  .catch(error => console.error('Erro:', error));
