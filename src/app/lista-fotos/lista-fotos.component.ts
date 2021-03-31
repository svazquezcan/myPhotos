import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Foto } from '../fotos/foto'
import { FOTOS } from '../fotos/fotos'


@Component({
  selector: 'app-lista-fotos',
  templateUrl: './lista-fotos.component.html',
  styleUrls: ['./lista-fotos.component.css']
})
export class ListaFotosComponent implements OnInit {

  fotos = FOTOS; 
  textoFiltrado = "";  
  @Output() fotoSeleccionada = new EventEmitter<Foto>();
  
  constructor() { }

  ngOnInit(): void {
  }

  selecc(seleccionada:Foto){
    this.fotoSeleccionada.emit(seleccionada);
  }

}
