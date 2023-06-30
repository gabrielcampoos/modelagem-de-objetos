export default interface BombaCombustivelContratos {
  abastecerPorValor: (
    tipoCombustivel: "alcool" | "gasolina",
    valor: number
  ) => void;
  abastecerPorLitro: (
    tipoCombustivel: "alcool" | "gasolina",
    litros: number
  ) => void;
  alterarValor: (tipoCombustivel: "alcool" | "gasolina", valor: number) => void;
  alterarCombustivel: (tipoCombustivel: "alcool" | "gasolina") => void;
  alterarQuantidadeCombustivel: (quantidade: number) => void;
}
