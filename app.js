// function fizzBuzz(numero) {
//     for (let i = 1; i < numero; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("fizzbuzz")
//         } else if (i % 3 === 0) {
//             console.log("fizz")
//         }
//         else if (i % 5 === 0) {
//             console.log("buzz")
//         }
//         else {
//             console.log(i)
//         }
//     }
// }
// fizzBuzz(15);

//Holaa juan, terminé resolviendo el ejercicio, me di cuenta de que en vez de pasarle los diferentes numeros a mis condicionales...
//solo les estaba pasando el numero 15 de manera estática, entonce lo arreglé simplemente cambiando el "numero" por el indice
//tambien le agregué la condicion final de mostrar solo el indice para que se genere ese 1 2 fizz 4 buzz... etc... y finalmente, 
//tuve que mover la condición de si es divisible entre 3 y 5 para el comienzo... porque si no consideraba que el numero era simplemente fizz xD


// function fizzBuzz(numero){ aqui las puedes comparar 
//     for(let i = 1; i < 100; i++){
//         if(numero %3 == 0){
//             console.log("fizz")
//         }
//         else if(numero %5 == 0){
//             console.log("buzz")
//         }
//         else if(numero %3 == 0 && numero % 5 == 0){
//             console.log ("fizzbuzz")
//         }
//     }
// }

// fizzBuzz(15); ---------------------- Aca está el resto del Ejercicio

let generateText = document.getElementById("generateText");
let num = Math.floor(Math.random() * 100);

generateRandomText = generateText.addEventListener("click", function () {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result1 = ' ';
    const charactersLength = characters.length;


    for (let i = 0; i < num; i++) {
        result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    console.log(result1)

    let textArea1 = document.getElementById("result1").value = result1
    let textArea2 = document.getElementById("result2").value = result1

    return result1;
});

//Bloquear el copiar y pegar 








