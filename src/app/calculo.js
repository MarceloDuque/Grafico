function AreaTriangulo()
{
var area, base, altura;
    base = prompt("Coloca la base");
    altura = prompt("Coloca la altura");

    base = parseInt(base);
    altura = parseInt(altura);
    area = (base * altura)/2;

    alert("El area del triángulo es:" +area);
}