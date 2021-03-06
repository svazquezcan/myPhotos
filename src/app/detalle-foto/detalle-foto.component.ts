import { Component, Input, OnInit } from '@angular/core';
import { Foto } from '../fotos/foto'


@Component({
  selector: 'app-detalle-foto',
  templateUrl: './detalle-foto.component.html',
  styleUrls: ['./detalle-foto.component.css']
})
export class DetalleFotoComponent implements OnInit {
  @Input() foto: Foto | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
