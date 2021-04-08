import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { saveAs } from "file-saver";
import {environment } from '../../environments/environment'
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  courses :any = [];
  httplink = environment.apiUrl;
  constructor(private service: AppService) { }

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
}
