// class List {
//     constructor() {
//         this.data = [];
//     }

//     add(data) {
//         this.data.push(data)
//         console.log(this.data)
//     } 
// }

// class TodoList extends List {
//     constructor() {
//         super();

//         this.usuario = 'Ryan';
//     }

//     mostraUsuario() {
//         console.log(this.usuario)
//     }
// }

// const MinhaLista = new TodoList();

// document.getElementById('novotodo').onclick = function() {
//     MinhaLista.add('Novo Todo');
//     MinhaLista.mostraUsuario();
// }

const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Moc',
        estado: 'MG',
    },
};

//pega o nome, idade e a cidade
//const { nome, idade, endereco: { cidade } } = usuario;

//VARIAVEL REST tres pontos (...), pega o restante da desestruturação
const {nome, ...resto} = usuario;

console.log(resto);

//também é possível passar os parametros via REST, eles vem em forma de array
function soma (a, b, ...params) {
    return params;
}
console.log(soma(1, 3, 4, 4, 5, 6));



//SPREAD (passar os valores de uma variavel)
const usuario2 = {...usuario, nome: 'Mateus'}
console.log(usuario2)

import axios from 'axios';

class Api {
    static async getUserInfo(username) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`)
            console.log(response);
        } catch (err) {
            console.warn('Erro na api');
        }
    }
}

Api.getUserInfo('diego3g')