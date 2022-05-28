import { Component, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
  selector:'app-novaTransferencia',
  templateUrl: './novaTransferencia.component.html',
  styleUrls: ['./novaTransferencia.component.scss']
})

export class NovaTransferenciaComponent{

  @Output() onTransfer = new EventEmitter<any>();

  valor: number;
  destino: number;

  transferir(){
    console.log('Solitada nova transferência');

    const emitValue = { valor: this.valor, destino: this.destino }
    this.onTransfer.emit(emitValue);
    this.limparCampos();
  }

  limparCampos(){
    this.valor = null;
    this.destino = null;
  }
}
