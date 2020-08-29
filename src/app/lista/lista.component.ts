import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  lista:any[];
  constructor() { }

  ngOnInit(): void {
    this.lista = ['al1','al2','al3']
  }

  

}
