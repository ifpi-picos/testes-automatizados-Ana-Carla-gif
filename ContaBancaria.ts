import { visitLexicalEnvironment } from "typescript";

export default class ContaBancaria {
  private numeroConta: number; //Representa o número da conta bancária.
  private agencia: number; // Representa o número da agência bancária.
  private saldo: number; // Armazena o saldo atual da conta.
  private extrato: string[]; //Armazena o histórico de operações realizadas na conta (depósitos, saques, transferências).

  // UTILIZA O THIS PARA ACESSAR O QUE ESTÁ DENTRO DOS PRIVADOS

  public constructor() {
    // UTILIZA-SE ISSO PARA NÃO MOSTRAR OS TRACINHOS VERMELHOS (ERRADO)
    this.numeroConta = Math.floor(Math.random()
    *900000000) + 100000000
    this.agencia = 0;
    this.saldo = 0;
    this.extrato = [];
  }
  public depositar(valor: number) {
    // publico para aparecer para o usuário
    if (valor > 0) {
      this.saldo += valor;
      let descricao = `Depósito de R$ ${valor.toFixed(2)}`; // Pega o extrato e utiliza o push para a acrescentar o valor novo  ao extrato.
      // Utiliza-se toFixed para imprimir os dois númertos após a virgúla.
      this.registrarOperacao(descricao)
      return this.saldo;
    } else {
      throw new Error(`Valor inválido!`); // Criando um erro para lançar esse erro no else , colocamos por conta do teste
    }
  }

  public sacar(valor: number) {
    if (valor > 0 && valor <= this.saldo) {
      this.saldo -= valor;
      let descricao = `Saque de R$ ${valor.toFixed(2)}`;
      this.registrarOperacao(descricao)//Chamar 
      return this.saldo;
    } else {
      throw new Error(`Valor inválido!`);
    }
  }
  private receberTranferencia(valor: number, conta: ContaBancaria) {
    // EStá privado pq o usuário ñ vai acessar diretamente.
   let descricao = `Transferência de ${valor} recebida`;
   conta.registrarOperacao(descricao)
  }
  public transferir(valor: number, conta: ContaBancaria) {
    if (valor > 0 && valor <= this.saldo) {
      conta.receberTranferencia(valor, conta);
      this.saldo -= valor;
      let descricao =`Tranferencia de R$ ${valor} realizada.`;
      this.registrarOperacao(descricao)
      return this.saldo;
    } else {
      throw new Error("Valor inválido");
    } 
  }
public consultarSaldo(){
  return this.saldo
}

public exibirExtrato(){
  let extrato = " "
  this.extrato.forEach((operacao,index) => {
    extrato += `${index + 1}. ${operacao}\n`
  })

  return extrato.trim()
}
private registrarOperacao(descricao: string){
  let data: Date | string= new Date ()
  data = `${data.getDate()}/${(data.getMonth()+1)}/${data.getFullYear()}`
  descricao = `${descricao}-${data}`
  this.extrato.push(descricao)
  
}
}

// public transferir (valor : number){
//   let contaDestino = 0
//   if(valor <= this.saldo){
//     this.saldo -= valor
//    contaDestino.push(`${valor}`)

//   }

//   public depositar(valor: number) {
//     if (valor > 0) {
//       this.saldo += valor;
//     }
//   }

//   public sacar (valor:number){
//     if( valor >  this.saldo ){
//       return "Saldo insuficiente !"
//     }
//     else if (this.saldo - valor) {
//       return "Saque efetuado com sucesso"
//     }
//   }

//   public consultarSaldo() {
//     return this.saldo;
//   }
// }
