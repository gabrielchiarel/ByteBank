import { Transferencia } from '../models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';
import { Component, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector:'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent{
  //@Output() onTransfer = new EventEmitter<any>();
  valor: number;
  destino: number;

  constructor(private service:  TransferenciaService, private router: Router){}

  transferir(){
    console.log('Solitada nova transferência');

    const transfer: Transferencia = { valor: this.valor, destino: this.destino }

    this.service.addTransferencia(transfer).subscribe(
      (result) => {
        console.log(result);
        this.limparCampos();
        this.router.navigateByUrl('extrato');
      }, (error) => {
        console.error(error);
      }
    );
  }

  limparCampos(){
    this.valor = null;
    this.destino = null;
  }
}
