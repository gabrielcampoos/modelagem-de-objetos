import CalculadoraContratos from "../contratos/Calculadora.contatros";

class Calculadora implements CalculadoraContratos {
  public _numero1: number;
  public _numero2: number;
  public _historico: {
    soma: number[];
    subtracao: number[];
    multiplicacao: number[];
    divisao: number[];
  };

  constructor(numero1: number, numero2: number) {
    this._numero1 = numero1;
    this._numero2 = numero2;
    this._historico = {
      soma: [],
      subtracao: [],
      multiplicacao: [],
      divisao: [],
    };
  }
  somar() {
    const soma = this._numero1 + this._numero2;
    this._historico.soma.push(...this._historico.soma, soma);
  }
  subtrair() {
    const subtracao = this._numero1 - this._numero2;
    this._historico.subtracao.push(...this._historico.subtracao, subtracao);
  }
  multiplicar() {
    const multiplicacao = this._numero1 * this._numero2;
    this._historico.multiplicacao.push(
      ...this._historico.multiplicacao,
      multiplicacao
    );
  }
  dividir() {
    const divisao = this._numero1 / this._numero2;
    this._historico.divisao.push(...this._historico.divisao, divisao);
  }
  visualizarHistorico() {
    console.log(`== Soma == `);
    console.log(this._historico.soma);

    console.log(`== Subtração == `);
    console.log(this._historico.subtracao);

    console.log(`== Multiplicação == `);
    console.log(this._historico.multiplicacao);

    console.log(`== Divisão == `);
    console.log(this._historico.divisao);
  }
}

export default Calculadora;
