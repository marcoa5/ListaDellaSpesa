import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import 'firebase/auth';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  
  constructor() { }
  uId:string;
  Image:any;
  Nome:any;
  mail:any;
  uiConfig = {
    
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
    };
  
  ngOnInit() {
    
  firebase.initializeApp(environment.FirebaseConfig);
  var ui = new firebaseui.auth.AuthUI(firebase.auth());
  firebase.auth().onAuthStateChanged((user)=> {
    if (user) {
      this.uId = user.uid;
      this.Image = user.photoURL
      this.Nome = user.displayName;
      this.mail=user.email;
      document.getElementById('testlogin').style.display='none';
      document.getElementById('prin').style.display='inline';
    } else {
      ui.start('#login', this.uiConfig);
      document.getElementById('testlogin').style.display='inline';
      document.getElementById('prin').style.display='none';
    }
  }, function(error) {
    console.log(error);
  });
  }

  logout(){
    firebase.auth().signOut();
  }

  }

  