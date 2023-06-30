export default interface ContaContratos {
  alterarNome: (nome: string) => void;
  deposito: (valorDeposito: number) => void;
  saque: (valorSaque: number) => void;
}
