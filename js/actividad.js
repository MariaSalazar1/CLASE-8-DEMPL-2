
// Solicitar numeros al usuario
const num1 = prompt("Escribe el numero 1");
const num2 = prompt("Escribe el numero 2");
const num3 = prompt("Escribe el numero 3");

const compararNumeros = (num1, num2, num3) => {
    let mayor, menor;
    
    // Verificar si los tres números son iguales
    if (num1 === num2 && num2 === num3) {
        return 'Los tres números son iguales:'+ num1;
    }
    
    // Calcular el mayor y menor número
    mayor = Math.max(num1, num2, num3);
    menor = Math.min(num1, num2, num3);
    
    // Detectar números repetidos
    let repetidos = [];
    if (num1 === num2 || num1 === num3) repetidos.push(num1);
    if (num2 === num3 && num1 !== num2) repetidos.push(num2); // Evitar duplicados
    
    // Crear el resultado
    let resultado = '<br>El número mayor es:' +mayor+'<br>El número menor es:'+ menor;
    
    // Añadir los números repetidos si existen
    if (repetidos.length > 0) {
        resultado += '<br>Los siguientes números se repiten: '+[...new Set(repetidos)].join(", ");
    }
    
    return resultado;
};


// Llamada a la función compararNumeros
const resultado = compararNumeros(num1, num2, num3);
// Mostrar el resultado en consola y en el DOM si existe el elemento con ID 'resultado'
document.write(resultado);


//console.log(resultado);
//const elementoResultado = document.getElementById('resultado');
//if (elementoResultado) {
  //  elementoResultado.innerHTML = resultado;
//}
