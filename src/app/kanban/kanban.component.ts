import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';
import { Columns } from 'src/app/models/columns.model';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.css']
})

export class KanbanComponent implements OnInit {

  constructor() { }

  board: Board = new Board('Test Board', [
    new Columns('Ideas', [
      "Some random idea",
      "This is another random idea",
      "build an awesome application"
    ]),
    new Columns('Research', [
      "Lorem ipsum",
      "foo",
      "This was in the 'Research' column"
    ]),
    new Columns('Todo', [
      'Get to work',
      'Pick up groceries',
      'Go home',
      'Fall asleep'
    ]),
    new Columns('Done', [
      'Get up',
      'Brush teeth',
      'Take a shower',
      'Check e-mail',
      'Walk dog'
    ])
  ]);

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
