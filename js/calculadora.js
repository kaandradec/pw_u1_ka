const SUMA = '+';
const RESTA = '-';
const MULTIPLICACION = '*';
const DIVISION = '/';


function sumar(numero1, numero2) {
    return numero1 + numero2;
}

function restar(numero1, numero2) {
    return numero1 - numero2;
}

function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}

function dividir(numero1, numero2) {
    return numero1 / numero2;
}

function evaluarOperacion(tipo) {
    let num1 = parseFloat(document.getElementById('id_numero_1').value);
    let num2 = parseFloat(document.getElementById('id_numero_2').value);
    let resultado = 0;
    if (tipo === SUMA) {
        resultado = sumar(num1, num2);
    }
    if (tipo === RESTA) {
        resultado = restar(num1, num2);
    }
    if (tipo === MULTIPLICACION) {
        resultado = multiplicar(num1, num2);
    }
    if (tipo === DIVISION) {
        resultado = dividir(num1, num2);
    }

    const resultadoElemento = document.getElementById('id_resultado');

    resultadoElemento.innerText = (resultadoElemento.innerText + resultado).toString();


}

const fundamentos = () => {
    // Tipos de variables
    var variable = 0; //Obsoleto

    let nombre = '10';
    let numero = 10;
    let arreglo = [1, 2, 3];

    console.log(arreglo + nombre + numero);
    console.log('texto de prueba');

    console.log('Fundamentos JS');

    // Arreglos
    const diasLaborales = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
    console.log(diasLaborales[0]);

    console.log(diasLaborales[10]); // undefined

    let valor = '';
    console.log(valor)

    diasLaborales.push('Sabado');
    diasLaborales.unshift('Dias: ');
    console.log(diasLaborales);

    const numerosImpares = [1, 3, 5, 7, 9];
    const numerosPares = [2, 4, 6, 8];

    const numeros = numerosImpares.concat(numerosPares);

    console.log(numeros);

    // Sentencias de control
    for (const dia of diasLaborales) {
        console.log(dia);
        if (dia === 'Viernes') {
            console.log('Por fin viernes');
        } else {
            console.log('Aún no es Viernes')

        }
        if (dia !== 'Viernes') {
            console.log('Día normal');
        } else {
            console.log('Día de salida')
        }
    }

    // Manejo de objetos 
    const miProfesor = {
        nombre: 'Kevin',
        apellido: 'Andrade',
        edad: 35,
        genero: 'Masculino',
        ciudad: 'Quito'
    };

    console.log(miProfesor);
    console.log(miProfesor.nombre);

    // Setteo de atributos
    miProfesor.apellido = 'Terán';
    console.log(miProfesor);

    if (miProfesor.ciudad === 'Quito') {
        console.log('Es de la capital');
    }

    const estudiante1 = {
        nombre: 'Thom',
        apellido: 'Parra',
        edad: 25,
        genero: 'Masculino',
        ciudad: 'Quito'
    };
    const estudiante2 = {
        nombre: 'Camila',
        apellido: 'Perez',
        edad: 12,
        genero: 'Femenino',
        ciudad: 'Quito'
    };
    const estudiante3 = {
        nombre: 'Kevin',
        apellido: 'Andrade',
        edad: 35,
        genero: 'Masculino',
        ciudad: 'Quito'
    };

    const estudiantes = [estudiante1, estudiante2, estudiante3];

    console.table(estudiantes)

};
