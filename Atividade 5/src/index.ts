import BombaCombustivel from "./classes/BombaCombustivel";

const bomba1 = new BombaCombustivel(7);

bomba1.abastecerPorValor("alcool", 10);
bomba1.abastecerPorValor("gasolina", 10);

bomba1.abastecerPorLitro("alcool", 10);
bomba1.abastecerPorLitro("gasolina", 10);

bomba1.alterarValor("alcool", 1);
bomba1.alterarValor("gasolina", 3);

bomba1.alterarCombustivel("alcool");
bomba1.alterarCombustivel("gasolina");

bomba1.alterarQuantidadeCombustivel(100);
