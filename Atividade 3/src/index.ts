import Conta from "./classes/Conta";

const conta1 = new Conta("João", 123456);
console.log(conta1);

conta1.alterarNome("Pedro");
console.log(conta1);

conta1.deposito(1000);
console.log(conta1);

conta1.saque(999);
console.log(conta1);
