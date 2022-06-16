// Código del cuadrado
console.group("Cuadrado");

function perimetroCuadrado(lado){
    return lado * 4;   
}

function areaCuadrado(lado){
    return lado * lado;   
}

console.groupEnd();


// Código del triangulo
console.group("Triangulo");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}


console.groupEnd();

// Código del circulo
console.group("Circulos");


function diametroCirculo(radio){
    return radio * 2;
}

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * pi;
}

function areaCirculo(radio){
    return (radio * radio) * pi;
}
console.groupEnd();


//Interaccion con el HTML CUADRADO
function calcularPerimetroCuadrado(){
   const input = document.getElementById("inputCuadrado");
   const value = input.value;
   const perimetro = perimetroCuadrado(value);
   
   alert(perimetro);
   
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    
    alert(area);
}


//TRIANGULO

function calcularPerimetroTriangulo(){
    const ladoA = document.getElementById("ladoA");
    const ladoB = document.getElementById("ladoB");
    const base = document.getElementById("base");
    const L1 = ladoA.value;
    const L2 = ladoB.value;
    const L3 = base.value;
    const perimetro = perimetroTriangulo(L1, L2, L3);
    
    alert(perimetro);
    
 }
 
 function calcularAreaTriangulo(){
     const base = document.getElementById("base");
     const b = base.value;
     const altura = document.getElementById("altura");
     const a = altura.value;
     const area = areaTriangulo(b, a);
     
     alert(area);
 }

//CIRCULO
const pi = Math.PI;
 function calcularDiametroCirculo(){
    const radio = document.getElementById("radio");
    const R = radio.value;
    const diametro = diametroCirculo(R);
    
    alert(diametro);   
    
 }
 
 function calcularPerimetroCirculo(){
     const radio = document.getElementById("radio");
     const R = radio.value;
    const perimetro = perimetroCirculo(R);
     
     alert(perimetro);
 }

 function calcularAreaCirculo(){
    const radio = document.getElementById("radio");
    const R = radio.value;
    const area = areaCirculo(R);
    
    alert(area);
}


function validarIsosceles(lado1, lado2, base){
    if(lado1 != lado2){
        return "Las medidas no corresponden a un triagulo isosceles"
    }else if((lado1 * lado2) < base ){
        return "Las medidas no corresponden a un triagulo isosceles"
    }else{
        const calculo = (lado1 * lado1) - ((base * base) / 4);
        const resultado = Math.sqrt(calculo);
        return resultado;
    }
}



function calcularAlturaTriangulo(){
    const ladoA = document.getElementById("ladoIA");
    const ladoB = document.getElementById("ladoIB");
    const base = document.getElementById("baseI");
    const L1 = parseInt(ladoA.value);
    const L2 = parseInt(ladoB.value);
    const L3 = parseInt(base.value);
    const altura = validarIsosceles(L1, L2, L3);
    
    alert(altura);
}
