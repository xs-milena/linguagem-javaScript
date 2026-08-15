let lista = [1,2,3]; //lista normal

// 1 2 3 
// [ , , , ,]
// [0, 1, 2, 3]

function funcao_adicionar(lista, elemento) { // pega lista e o elemento
    let lista_nova = new Array(lista.length) // lista_nova vai ser uma lista nova só que com espaços vazios, apenas com o tamanho
    lista_nova = lista //copiando a lista antiga, então a lista_nova terá os mesmos valores da lista antiga 
    lista_nova[lista_nova.length] = elemento; //ele vai pegar o espaço que está vazio no lista_nova.legth e add o elemento escrito no input.

    return lista_nova;
}


function funcao_removerFInal(lista, remover) {
    let lista_remover = new Array(lista.length)
    lista_remover = lista
    lista_remover[lista_remover.length - 1];

    return lista_remover
}


function funcao_removerInicio(lista, remover) {
    let lista_remover = new Array(lista.length)
    lista_remover = lista
    lista_remover[lista_remover.length] = remover;

    return lista_remover
}