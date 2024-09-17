import { beforeEach, describe, expect, test } from "bun:test";
import ContaBancaria from "./ContaBancaria.ts";

// Antes de cad ateste vamos criar as contas  utilizando o beforEach

describe ("TESTE DA CLASSE CONTA BANCÁRIA " ,() => {
    let conta : ContaBancaria
    beforeEach(() => { 
     conta= new ContaBancaria ()
    }) // UTILIZA ISSO PARA CRIAR UMA CONTA , PARA NÃO TER QUE FICAR REPETINDO DURANTE O PROGRAMA
test("Método Depositar", () =>{
    expect(conta.depositar(300)).toBe(300)
})
test ("Método Depositar - depósito inválido",()=> {
    expect (()  => conta.depositar (-100)).toThrow("Valor inválido!"); // toThrow vai pegar o erro qeu ja foi lançado
})

 // coloca o parentese com espaço so qaundo coloca toThrow
test ("Método Sacar- depositar", () => {
    //expect(() => conta.sacar
    conta.depositar(50)
    expect(conta.sacar(30)). toBe(20);
})

test ("Método Sacar ", () => {
    //expect(() => conta.sacar
    
    expect(() => conta.sacar (-1)).toThrow("Valor inválido");

})

}) 










































// describe("Testando classe ContaBancaria", () => {
//   let conta: ContaBancaria;
//   beforeEach(() => {
//     conta = new ContaBancaria();
//   });
//   test("Testando sacar um valor insuficiente " , () => {


//     conta.sacar(500)
//     expect (conta.consultarSaldo()).toBe
//   })

//   test("Testando depositar valor positivo", () => {
//     conta.depositar(100);
//     expect(conta.consultarSaldo()).toBe(100);
//   });

//   test("Testando depositar valor negativo", () => {
//     conta.depositar(-100);
//     expect(conta.consultarSaldo()).toBe(0);
//   });
// });
