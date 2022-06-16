// Código del cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();


// Código del triangulo
console.group("Triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log("Los lados del triangulo miden: " 
    + ladoTriangulo1 
    + "cm, " 
    + ladoTriangulo2 
    + "cm, " 
    + baseTriangulo 
    + "cm"
);

const alturaTriangulo = 5.5;
console.log("La altura del triangulo es: " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triangulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

// Código del circulo
console.group("Circulos");
const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;
const pi = Math.PI;
const perimetroCirculo = diametroCirculo * pi;
const areaCirculo = (radioCirculo * radioCirculo) * pi;

console.log("El radio del circulo es: " + radioCirculo + "cm");
console.log("El diametro del circulo es: " + diametroCirculo + "cm");
console.log("El valor de PI es: " + pi);
console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");
console.log("El area del circulo es: " + areaCirculo + "cm^2")


console.groupEnd();