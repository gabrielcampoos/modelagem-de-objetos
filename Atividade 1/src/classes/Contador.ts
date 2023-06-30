import ContadorContrato from "../contratos/Contador.contrato";

class Contador implements ContadorContrato {
  public _itens: number;
  public _eventos: number;
  public _tipo: string;

  constructor(tipo: string) {
    this._itens = 0;
    this._eventos = 0;
    this._tipo = tipo;
  }
  zerar() {
    this._itens = 0;
    this._eventos = 0;
  }

  incrementar() {
    if (this._tipo === "itens") {
      this._itens += 1;
    } else {
      this._eventos += 1;
    }
  }

  retornarValor() {
    console.log(`Itens: ${this._itens} - Eventos: ${this._eventos}`);
  }
}

export default Contador;
