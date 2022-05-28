import { TransferenciaService } from './services/transferencia.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  constructor(private service: TransferenciaService){

  }

  transferir($event){
    this.service.addTransferencia($event);
    // {...$event} isso aqui faz com que ele pegue as propriedades existentes no objeto e faça no objeto que estou criando agora
    //const transfer = {...$event, data: new Date()}
    //this.transferencias.push(transfer);
  }
}
