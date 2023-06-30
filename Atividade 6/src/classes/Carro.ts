import CarroContratos from "../contratos/Carro.contratos";

export default class Carro implements CarroContratos {
  public _consumoDeCombustivel: number;
  public _quantidadeNoTanque: number;

  constructor(consumoDeCombustivel: number) {
    this._quantidadeNoTanque = 0;
    this._consumoDeCombustivel = consumoDeCombustivel;
  }

  adicionarGasolina(quantidade: number) {
    console.log(`Você tem ${this._quantidadeNoTanque} litros de combustivel`);
    this._quantidadeNoTanque += quantidade;
    console.log(
      `Você tem ${this._quantidadeNoTanque} litros de combustivel \n`
    );
  }

  andar(consumoDeCombustivel: number) {
    console.log(`Você tinha ${this._quantidadeNoTanque} litros`);
    this._quantidadeNoTanque = consumoDeCombustivel / this._quantidadeNoTanque;
    console.log(`Agora você tem ${this._quantidadeNoTanque} litros`);
  }

  obterGasolina() {
    console.log(
      `Você tem ${this._quantidadeNoTanque} litros de combustivel \n`
    );
  }
}
