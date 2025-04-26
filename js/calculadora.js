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

    console.table(estudiantes);

    const ciudadano = {
        nombre: 'Kevin',
        apellido: 'Andrade',
        direccion: {
            callePrincipal: 'Av. America',
            calleSecundaria: 'Av. La Gasca',
            numeracion: '5620',
            barrio: {
                referencia: 'Frente al Dilipa'
            }
        }
    };

    console.log(ciudadano);
    console.log(ciudadano.nombre);
    console.log(ciudadano.direccion);
    console.log(ciudadano.direccion.callePrincipal);

    ciudadano.direccion.callePrincipal = 'Av. Amazonas';
    console.log(ciudadano);

    const arregloEstudiantes = [{ nombre: 'Thom' }, { nombre: 'Jhon' }, { nombre: 'Carla', edad: 23 }];
    console.log(arregloEstudiantes[1].nombre);


    // Desestructuración de Arreglos
    const colores = ['Amarillo', 'Azul', 'Verde', 'Naranja'];

    const [c1, c2, c3, c4] = colores;
    console.log('COLOR: ', c1);
    console.log('COLOR: ', c2);
    console.log('COLOR: ', c3);
    console.log('COLOR: ', c4);



    const [, , es3] = arregloEstudiantes; // No es necesario obtener todos los elementos
    console.log('ESTUDIANTE: ', es3);

    const [c01, c02] = ['Amarillo', 'Azul', 'Verde', 'Naranja'];
    console.log(c02)

    // Puedo desestructurar un arreglo en cualquier parte del código
    desestructuracionArreglo(colores);

    const [, p2, p3, p4, p5, p6] = desestructuracionArreglo2();
    console.log(p2);
    console.log(p6);

    //⚠️ La desestructuración de arreglos se hace a travez de sus posiciones

    // Desestructuración por operador rest
    console.log('>> Desestructuración por operador rest');
    const [p1, ...resto] = desestructuracionArreglo2();
    console.log(p1);
    console.log(resto);

    // Desestructuración de Objetos 
    const auto = {
        marca: 'Toyota',
        modelo: 'Prius',
        anio: 2024,
        color: 'Rojo',
    }
    const { marca, anio } = auto;
    console.log(marca)
    console.log(anio)



    const { anio1 } = {
        marca1: 'Toyota',
        modelo1: 'Prius',
        anio1: 2024,
    };

    console.log(anio1);

    desestructuracionObjeto(auto);

    //
    const universidad = {
        nombre: 'UCE',
        direccion: 'America',
        rector: {
            nombre1: 'Daniel',
            apellido: 'Teran'
        }
    }

    const { rector } = universidad;
    console.log(rector);
    const { nombre1, apellido } = rector;
    console.log(apellido);
    console.log(nombre1);

    const universidad2 = {
        nombre2: 'UCE',
        direccion2: 'America',
        rector2: {
            nombreR2: 'Daniel',
            apellidoR2: 'Teran'
        }
    };

    const { nombre2, rector2: { nombreR2 } } = universidad2;
    console.log('NOMBRER2: ', nombreR2);

    // Desestructuración de objetos por operador rest
    console.log('>> Desestructuración de objeto por operador rest');

    const autoR = {
        marcaR: 'Toyota',
        modeloR: 'Prius',
        anioR: 2024,
        colorR: 'Rojo',
    }

    const { marcaR, colorR, ...restoO } = autoR;
    console.log(marcaR)
    console.log(colorR)
    console.log(restoO)

};

function desestructuracionArreglo([c1, c2, c3]) {
    console.log('COLOR ->', c1);
    console.log('COLOR ->', c2);
    console.log('COLOR ->', c3);
}

function desestructuracionArreglo2() {
    const colores = ['Rosado', 'Lila', 'Dorado'];
    return colores;
}

function desestructuracionObjeto({ marca, color }) {
    console.log('AUTO', marca);
    console.log('AUTO', color);
}
