//1 - crie uma função que exiba uma mensagem no console

let message = () => 
    '"Luke, I am your father"';
console.log(message());


//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

let name = (name) => {
    console.log(`Meu nome é ${name}`);
}
name("Letícia");


//3 - crie uma função que receba seu nome, idade, e estilo musical preferido (parâmetros) e exiba no console

let dados = (nome, idade, música) => {
    console.log(`Meu nome é ${nome}, minha idade é ${idade} anos e meu estilo musical preferido é ${música}`);
}
dados ("Letícia", 21, "Pop");


//4 - crie uma função que receba o seu filme favorito, musica favorita (parâmetros) e exiba no console

function movieAndMusic (favoriteMovie, favoriteMusic) {
    console.log(`Meu filme favorito é ${favoriteMovie} e minha música favorita é ${favoriteMusic}`);
}
movieAndMusic ("Pride and Prejudice", "Christ Is Enough");

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função

function triplo(x){
    return x * 3
}
console.log(triplo(15))
