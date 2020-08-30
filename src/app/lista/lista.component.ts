import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep',
    'Get to work',
    'Pick up groceries',
    'Go home','Get to work',
    'Pick up groceries',
    'Go home','Get to work',
    'Pick up groceries',
    'Go home','Get to work',
    'Pick up groceries',
    'Go home',
  ];

  done = [];

  ngOnInit(){
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data,event.previousIndex,event.currentIndex);
    }
  }

}
