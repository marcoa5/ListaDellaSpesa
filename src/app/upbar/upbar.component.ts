import { Component, OnInit, Input } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'upbar',
  templateUrl: './upbar.component.html',
  styleUrls: ['./upbar.component.css']
})
export class UpbarComponent implements OnInit {
  @Input() NomeU: string;
  @Input() Immagine: string; 
  constructor() { }

  ngOnInit(): void {
    
  }

logout(){
  let a = confirm("Vuoi effettuare il logout?")
  if(a==true){
    firebase.auth().signOut();
  }
}

}
