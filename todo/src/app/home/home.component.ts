import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { TodoService } from '../todo.service';
import { FormBuilder, Validators } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  todoText = this.fb.group({
    tContent: ["", [Validators.required]]

  });

  lists: any = []
  constructor(private todo: TodoService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.gettodo()
  }
  gettodo() {
    this.todo.list()
      .subscribe((data: any) => {
        this.lists = data.data;
        //console.log(this.lists)
      })
  }

  addtodo() {
    console.log("inside:home comp ts:", this.todoText.value.tContent)
    this.todo.add(this.todoText.value.tContent)
      .subscribe((data: any) => {
        console.log(data)
        alert(data.data.message)
        this.gettodo();

      }, (data: any) => {
        console.log(data)
        

      })

    

  }



  drop(event: CdkDragDrop<string[]>) {

    //console.log("start", event.previousIndex, event.currentIndex, event.item.data, event.container.data[event.previousIndex], event.container.data[event.currentIndex], event.container.data[event.previousIndex]['_id'], event.container.data[event.previousIndex]['order'])

    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex,);

    console.log(event.container.data[event.previousIndex]['_id'], event.container.data[event.currentIndex]['_id'])
    let pid = event.container.data[event.previousIndex]['_id'];
    let pord = event.container.data[event.previousIndex]['order'];
    let cid = event.container.data[event.currentIndex]['_id'];
    let cord = event.container.data[event.currentIndex]['order'];
    //if (pid != cid) {
    this.todo.sort(pid, pord, cid, cord)
      .subscribe((data: any) => {
        this.gettodo()
        console.log(data)



      })
    // }

  }
}
