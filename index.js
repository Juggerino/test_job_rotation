/*
//atividade 2
var n1=0,n2=1,n3,i=2

const resultado = [0,1];

while(i < 20){
    i++
    n3 = n1+n2
    n1 = n2
    n2 = n3

    resultado[i] = n3
}
console.log(resultado)*/

//Atividade 3
//maior e menor valor do mes
//Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.
/*
const dados =  fetch('./dados.json')
    .then((res) => res.json())    
    .then(tabela => {
        let maior = 1
        let menor = 2
        let media = 0
        let diaMai = 0
        let diaMen = 0

        //Verifica o maior e o menor faturamento e soma todos os valores para a media 
        for(let i=0;i<29;i++){

            media = tabela[i].valor + media

            if(tabela[i].valor > maior){
                maior = tabela[i].valor
                diaMai = tabela[i].dia
            }if(tabela[i].valor < menor){
                menor = tabela[i].valor 
                diaMen = tabela[i].dia 
            }
        }

        media = media/30

        //Compara a media de faturamento do mes com o faturamento dos dias
        for(let i=0;i<29;i++){

            if(tabela[i].valor > media){

                console.log("\nDias : "+tabela[i].dia+"\nValor : R$ "+tabela[i].valor)
            }
        }

        console.log("Dia : "+diaMai+"\nValor maior : R$ "+maior+
            "\nDia : "+diaMen+"\nValor menor : R$ "+menor+
            "\nMedia do mes : "+media)
       
    })
*/

//Atividade 4
/*
let sp = 6783643
let rj = 3667866
let mg = 2922988
let es = 2716548
let outros = 1984953
let resultado


resultado = sp+rj+mg+es+outros  

sp = (sp/resultado)*100
rj = (rj/resultado)*100
mg = (mg/resultado)*100
es = (es/resultado)*100
outros = (outros/resultado)*100

console.log("Total : R$ "+resultado+
    "\nSP : % "+sp+
    "\nRJ : % "+rj+
    "\nMG : % "+mg+
    "\nES : % "+es+
    "\nOutros : % "+outros)
*/


//Atividade 5
/*
let texto 
let array2 = []
let v = 0

texto = prompt("Digite um texto");
let array = texto.split('')

for (let i = 0; i < array.length; i++){
    v++
}

for(let i = 0; v != -1; v--){
    let letra = array[v]
    array2[i] = letra
    i++
}

console.log(array)
console.log(array2)
*/