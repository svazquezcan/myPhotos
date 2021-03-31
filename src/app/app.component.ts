import { Component } from '@angular/core';
import { Foto } from './fotos/foto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'misFotos';
  fotoSelecc: Foto | null = null;
  selecc(seleccionada:Foto){
    this.fotoSelecc = seleccionada;

  }
}
