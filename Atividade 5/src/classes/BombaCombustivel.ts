import BombaCombustivelContratos from "../contratos/BombaCombustivel.contratos";

class BombaCombustivel implements BombaCombustivelContratos {
  private _tipoCombustivel: "alcool" | "gasolina" | undefined;
  private _valorLitro: number;
  private _restanteNaBomba: number;

  constructor(valorLitro: number) {
    this._valorLitro = valorLitro;
    this._tipoCombustivel = undefined;
    this._restanteNaBomba = 10000;
  }

  abastecerPorValor(tipoCombustivel: "alcool" | "gasolina", valor: number) {
    let quantidadeLitros = 0;

    if (tipoCombustivel === "alcool") {
      this._valorLitro = 2;
      quantidadeLitros = valor / this._valorLitro;
    }

    if (tipoCombustivel === "gasolina") {
      this._valorLitro = 4;
      quantidadeLitros = valor / this._valorLitro;
    }

    console.log(
      `Foram colocados ${quantidadeLitros} litros. - Restante na bomba: ${
        this._restanteNaBomba - quantidadeLitros
      } litros \n`
    );
  }

  abastecerPorLitro(tipoCombustivel: "alcool" | "gasolina", litros: number) {
    let valorPagar = 0;

    if (tipoCombustivel === "alcool") {
      this._valorLitro = 2;
      valorPagar = litros * this._valorLitro;
    }

    if (tipoCombustivel === "gasolina") {
      this._valorLitro = 4;
      valorPagar = litros * this._valorLitro;
    }

    console.log(
      `Total a pagar: ${valorPagar} - Restante na bomba: ${
        this._restanteNaBomba - litros
      } litros \n`
    );
  }

  alterarValor(tipoCombustivel: "alcool" | "gasolina", valor: number) {
    if (tipoCombustivel === "alcool") {
      this._valorLitro = 2;
      console.log(`O valor do alcool era: ${this._valorLitro} reais`);
    }

    if (tipoCombustivel === "gasolina") {
      this._valorLitro = 4;
      console.log(`O valor da gasolina era: ${this._valorLitro} reais`);
    }
    this._valorLitro = valor;
    console.log(`O valor atual é: ${this._valorLitro} reais \n`);
  }

  alterarCombustivel(tipoCombustivel: "alcool" | "gasolina") {
    console.log(`Tipo do combustivel antigo: ${this._tipoCombustivel}`);
    this._tipoCombustivel = tipoCombustivel;
    console.log(`Tipo do combustivel: ${this._tipoCombustivel} \n`);
  }

  alterarQuantidadeCombustivel(quantidade: number) {
    console.log(`Quantidade na bomba antes: ${this._restanteNaBomba}`);
    this._restanteNaBomba = quantidade;
    console.log(`Quantidade na bomba: ${this._restanteNaBomba} \n`);
  }
}

export default BombaCombustivel;
