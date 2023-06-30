import ContaContratos from "../contratos/Conta.contrato";

class Conta implements ContaContratos {
  private _numeroDaConta: number;
  private _nome: string;
  private _saldo: number;

  constructor(nome: string, numeroDaConta: number) {
    this._nome = nome;
    this._numeroDaConta = numeroDaConta;
    this._saldo = 0;
  }

  alterarNome(nome: string) {
    this._nome = nome;
  }

  deposito(valorDeposito: number) {
    this._saldo += valorDeposito;
  }

  saque(valorSaque: number) {
    if (valorSaque > this._saldo) {
      console.log("Saldo insuficiente.");
      return;
    }

    this._saldo -= valorSaque;
  }
}

export default Conta;
