// creacion de funcion duplicidad de numeros
var doubleNumber = function () {
    var primerNumero = document.getElementById("primerNumero").value;
    var segundoNumero = document.getElementById("segundoNumero").value;

    var numbers = [primerNumero, segundoNumero];
    // nuevo array con los resultados de la llamada
    var doubles = numbers.map(function (x) {
        return x * 2;
    });
    if (primerNumero > 0 && segundoNumero > 0) {
        console.log(doubles)
        document.getElementById("resultDouble").innerHTML = doubles
        return
    }
    else {
        console.log("ingresaste algun numero menor que cero, ingresa un numero mayo a cero")
        document.getElementById("resultDouble").innerHTML = "ingresaste algun numero menor que cero, ingresa un numero mayo a cero";
        
    }
    primerNumero = document.getElementById("primerNumero").value = "";
    segundoNumero = document.getElementById("segundoNumero").value = "";
}

// creacion funcion conversiones a mayusculas
var PrimeraMayuscula = function () {
    var oracionInit = document.getElementById("oracionInit").value
    // division de la cadena por nodos, en este caso palabras
    var oracionFin = oracionInit.toLowerCase().split(' ');

    for (var i = 0; i < oracionFin.length; i++) {
        // hacemos un for para ir recorriendo palabra por palabra para que esta pueda tener la primera letra mayus
        oracionFin[i] = oracionFin[i].charAt(0).toUpperCase() + oracionFin[i].substring(1);
    }
    // unimos cada una de las palabras del arreglo que fueron separadas
    oracionInit = oracionFin.join(' ');

    document.getElementById("oracionMayus").innerHTML = oracionInit
    console.log(oracionInit)
}


// creacion de funcion para promedio
var SumaElementos = function () {
    array = [10, 20, 30, 20, 30, 40, 60];
    const sum = array.reduce(add, 0);
    let promedio = sum / array.length;
    console.log("El promedio del arreglo [" + array.join(", ") + "] es: " + promedio);
}
function add(accumulator, a) {
    return accumulator + a;
}


// creacion funcion encontrar numeros de suma
var BuscarSumaPar = function () {
    // var numeros = [1, 2, 3, 4, 5], suma = 9;
    //     numeros.forEach (function(numero){
    //         suma += numero;
    //     });
    //     console.log(suma);
    // const array = ([1, 2, 3, 4],i);
    // let sum = 9;

    // for (let i = 0; i < array.length; i++) {
    //     sum += array[i];
    // }
    // console.log(sum);

    let array = [3, 34, 4, 12, 5, 2];
    let tempInput = 55;
    let findSum = false;
    for (let i = 0; i < array.length; i++) {
        for (let b = 0; b < array.length; b++) {
            if (b !== i) {
                let tempPar = array[i] + array[b];
                if (tempPar === tempInput) {
                    console.log([array[i], array[b]]);
                    findSum = true;
                    break;
                }
            }

        }
        if (findSum) {
            break;
        }
    }
    if (!findSum) {
        console.log("No se encontro ninguna suma en el arreglo");
    }
}



// creacion de el menu ejerc5
const inventory = [
    {
        category: "bebida",
        name: "pepsi",
        price: 100
    },
    {
        category: "bebida",
        name: "mirinda",
        price: 10
    }, {
        category: "bebida",
        name: "seven",
        price: 30
    }, {
        category: "bebida",
        name: "grapete",
        price: 47
    },
    {
        category: "comida",
        name: "anborgueza",
        price: 12
    }
]

var test = function () {
    totalByCategory(inventory, 'comida');
}


var totalByCategory = function (inventoryArray, category) {
    let newArray = inventoryArray.filter(product => product.category === category);  
    let sumOp=(t, {price}) => t + price;  
    console.log(newArray.reduce(sumOp, 0));
}

