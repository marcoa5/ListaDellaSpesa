import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  lista:any[]=[];
  constructor(private _snackBar: MatSnackBar) {}
  sb: MatSnackBar;
  ngOnInit(): void {
    for(var i=1;i<100;i++){
      this.lista.push('elemento '+ i)
    }
    this.lista.sort();
  }

  delete(a){
    
    this.openSnackBar(a + ' eliminato', "Ripristina", a)
  }
  

  openSnackBar(message: string, action: string, item: string) {
    let d = this._snackBar.open(message, action, {
      duration: 5000,
    });
    for(var i=0;i<this.lista.length;i++){
      if(this.lista[i]==item){this.lista.splice(i,1)}
    }
    d.onAction().subscribe(() => {
      console.log('The snack-bar action was triggered!');
      this.lista.push(item);
      this.lista.sort();
    });
  }

}
