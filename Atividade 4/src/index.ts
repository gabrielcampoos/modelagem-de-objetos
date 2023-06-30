import Calculadora from "./classes/Calculadora";

const operacao1 = new Calculadora(10, 5);
const operacao2 = new Calculadora(20, 5);
const operacao3 = new Calculadora(40, 5);
const operacao4 = new Calculadora(100, 5);

operacao1.somar();
operacao2.somar();
operacao3.somar();
operacao4.somar();

operacao1.subtrair();
operacao2.subtrair();
operacao3.subtrair();
operacao4.subtrair();

operacao1.multiplicar();
operacao2.multiplicar();
operacao3.multiplicar();
operacao4.multiplicar();

operacao1.dividir();
operacao2.dividir();
operacao3.dividir();
operacao4.dividir();

operacao1.visualizarHistorico();
