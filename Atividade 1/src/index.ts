import Contador from "./classes/Contador";

const cont1 = new Contador("itens");
const cont2 = new Contador("itens");
const cont3 = new Contador("eventos");
const cont4 = new Contador("eventos");

cont1.incrementar();
cont2.incrementar();
cont3.incrementar();
cont4.incrementar();

cont1.retornarValor();
cont2.retornarValor();
cont3.retornarValor();
cont4.retornarValor();
