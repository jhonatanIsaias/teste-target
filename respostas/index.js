
function questão1() {
    let indice = 13;
    let soma = 0;
    let k = 0;
    while (k < indice) {
        k++;
        soma += k;
    }
    return soma;
    //o resultado da variável soma é igual a 91.

}


function questão2(numberQualquer) {
    const fibonacci = [0, 1];
    let soma = 0;


    while (soma < numberQualquer) {
        soma += fibonacci[fibonacci.length - 2];
        fibonacci.push(soma);
    }

    if (soma === numberQualquer) {
        return `${numberQualquer} faz parte da sequencia`;
    }
    else{
        return `${numberQualquer} não faz parte da sequencia`;
    }
}

function questão3 (){
    //a) 1,3,5,7,9
    //b)2,4,8,16,32,64,128
    //c)0,1,4,9,16,32,64,128
    //d)4,16,36,64,100
    //e)1,1,2,3,5,8,13
    //f)2,10,12,16,17,18,19,200
}
function questão4() {
    /*
    Primeiro eu adotei o carro como referencia, o qual vinha de ribeiraão preto. Depois eu calculei
    quanto tempo o caminhão levaria para para chegar no destino com os pedágios chegando a 1,41 horas.
    depois calculei o tempo em que o carro levaria para percorrer o mesmo percurso e cheguei a 0,90 horas.
    depois igualei as equações para achar o ponto onde os dois se encontram e cheguei a aproximadamente 
    ao quilometro 70 km.
    Logo a carro chegara primeiro poís tendo ele como referencia saindo do km 0 , faltará apenas 30km
    para chegar em franco, ja o caminhão faltará 70km para chegar em ribeirão preto. 
    */
}
function questão5(minhaString){
    let minhaStringInvertiva ="";
    for(let i = minhaString.length -1;i >=0; i--){
       minhaStringInvertiva += minhaString[i];
    }
    return minhaStringInvertiva;
}





