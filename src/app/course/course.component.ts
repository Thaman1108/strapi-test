import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { saveAs } from "file-saver";
import {environment } from '../../environments/environment';
import { MatDialog } from '@angular/material/dialog';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  courses :any = [];
  httplink = environment.apiUrl;
  panelOpenState = false;
  constructor(private service: AppService, public dialog :  MatDialog) { }

  ngOnInit(): void {
    this.service.getCall('/Categories').subscribe((response) => {
      console.log(response)
      this.courses = response;
    })
  }
  downloadCourse = async(file, name) =>{
    var link = this.httplink + file;
    let blob = await fetch(link).then(r => r.blob());
    saveAs(blob, name)
  }
    openDialog() {
        const dialogRef = this.dialog.open(AddLibraryDialogComponent);
    
        dialogRef.afterClosed().subscribe(result => {
          console.log(`Dialog result: ${result}`);
        });
      }
}

@Component({
    selector: 'app-addlibrarydialog',
    templateUrl: 'addlibrarydialog.component.html',
  })
  export class AddLibraryDialogComponent {
    librarydescription= "";
    libraryname = "";
    createStatus : boolean = false;
    constructor(public dialog :  MatDialog) { }
    todo = [
      'Get to work',
      'Pick up groceries',
      'Go home',
      'Fall asleep'
    ];
  
    done = [
      'Get up',
      'Brush teeth',
      'Take a shower',
      'Check e-mail',
      'Walk dog'
    ];
    
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