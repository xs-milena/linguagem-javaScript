function fazer_soma(numero1, numero2){

    if((numero1 == null || numero2 == null) || (numero1 == undefined || numero2  == undefined)) {
        console.log(`Parâmetro ${numero1} e ${numero2} não pode ser nulo ou indefinido`)
        return;
    }

    if((typeof numero2 != 'number' || typeof numero2 != 'number')) {
        console.log(`tipo inválido para o argumento ${numero1} e ${numero2}`)
        return;
    } else {
        let soma = numero1 + numero2;
        return soma;
    }
}

function fazer_distancia(x1, y1, x2, y2){

    if((x1 == null || y1 == null || x2 == null || y2 == null) || (x1 == undefined || y1  == undefined || x2  == undefined || y2  == undefined)) {
        console.log(`Parâmetro ${x1}, ${y1}, ${x2}, ${y2} não pode ser nulo ou indefinido`)
        return;
    }

    if((typeof x1 != 'number' || typeof y1 != 'number' || typeof x2 != 'number' || typeof y2 != 'number')) {
        console.log(`tipo inválido para o argumento ${x1}, ${y1}, ${x2}, ${y2}`)
        return;
    } else {
        let calculo = (((x2 + x1) ** 0.5) + ((y2 - y1) ** 0.5)) //potência = x ** 0.5
        let raiz = Math.sqrt(calculo); // raiz quadrada
        return raiz ;
    }
}

function fazer_conversao(numero) {

    if(numero == null || numero == undefined) {
        console.log(`Parâmetro ${numero} não pode ser nulo ou indefinido`)
        return;
    }

    if(typeof numero != 'number') {
          console.log(`tipo inválido para o argumento ${numero}`)
        return;
    } else {
        
        let hora = (numero / 3600).toFixed(0);
        let min1 = numero / 60;
        let min2 = (min1 % 60).toFixed(0); // resto que nn formou 60
        let seg = numero % 60; 
        
        let transformar = `${hora}: ${min2}: ${seg}`
        return transformar;

    }
}

function fazer_verificacao(numero) {

    let verificacao_primo = 0;

    if(numero == null || numero == undefined) {
        console.log(`Parâmetro ${numero} não pode ser nulo ou indefinido`)
        return;
    }

    if(typeof numero != 'number') {
          console.log(`tipo inválido para o argumento ${numero}`)
        return;
    }
        
    if (numero % 2 === 0) {
        return false; // n resta sobra
    } else {
        return true; // resta sobra
    }
}


function fazer_fatoria(numero) {

     if(numero == null || numero == undefined) {
        console.log(`Parâmetro ${numero} não pode ser nulo ou indefinido`)
        return;
    }

    if(typeof numero != 'number') {
          console.log(`tipo inválido para o argumento ${numero}`)
        return;
    }

   let multi = 1;

    for(let i = numero; i > 0; i--) {
    multi *= i;
    }
    return multi;
} 


function fazer_media(vetor) {

    if(vetor == null || vetor == undefined) {
        console.log(`Parâmetro ${vetor} não pode ser nulo ou indefinido`)
        return;
    } 
    
    if(typeof vetor != 'number') {
          console.log(`tipo inválido para o argumento ${vetor}`)
        return;
    }
    
   let soma_num = 0;

   for(let i = 0; i < vetor.length; i++) {
    soma_num += vetor[i];
   }

   let media = soma_num / vetor.length;
   return media;
} 

// function fazer_mediaPonderada(vetorMedias, vetorPesos) {

//      if((vetorMedias  == null || vetorPesos == null) || (vetorPesos == undefined || vetorMedias  == undefined)) {
//         console.log(`Parâmetro ${vetorMedias} e ${vetorPesos} não pode ser nulo ou indefinido`)
//         return;
//     }

//     if(typeof vetorMedias != 'number' || typeof vetorPesos != 'number') {
//           console.log(`tipo inválido para o argumento ${vetorMedias} e ${vetorPesos}`)
//         return;
//     }

// } 
