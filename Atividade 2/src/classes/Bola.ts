import BolaContratos from "../contratos/Bola.contrato";

class Bola implements BolaContratos {
  public _cor: string;
  public _circunferencia: number;
  public _material: string;

  constructor(cor: string, circunferencia: number, material: string) {
    this._cor = cor;
    this._circunferencia = circunferencia;
    this._material = material;
  }

  trocarCor(newCor: string) {
    this._cor = newCor;
  }

  mostrarCor() {
    console.log(this._cor);
  }
}

export default Bola;
