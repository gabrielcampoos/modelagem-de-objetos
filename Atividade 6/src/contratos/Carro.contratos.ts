export default interface CarroContratos {
  andar: (consumoDeCombustivel: number) => void;
  obterGasolina: () => void;
  adicionarGasolina: (quantidade: number) => void;
}
