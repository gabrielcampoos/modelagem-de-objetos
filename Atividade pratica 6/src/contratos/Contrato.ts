export default interface ContratoAluno {
  realizarProva: () => void;
  calcularNota: (gabaritoProva: string[]) => void;
  aprovarOuReprovar: () => void;
}
