"use strict";
let anyTeste;
anyTeste = 3;
anyTeste = 'teste';
anyTeste = 5;
let stringTeste = 'verificar';
stringTeste = anyTeste;
let unknownValor;
unknownValor = 3;
unknownValor = 'ola';
unknownValor = true;
unknownValor = 'vai sim';
let stringTeste2 = 'agora vai';
stringTeste2 = unknownValor;
if (typeof unknownValor === 'string') {
    stringTeste2 = unknownValor;
}
function geradorDeErro(mensagem, codigoDeErro) {
    throw { message: mensagem, errorCode: codigoDeErro }; // Nesse caso ele foi interrompido
}
