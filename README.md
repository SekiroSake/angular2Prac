# angular2 rapid tutorial
Practise ng2 with tutorials

## How to Run
Go to project direct and - > npm start   , project will be loaded in watch mode

### Template with ul and ngFor
----
```
import {Component} from 'angular2/core'

@Component({
    selector: 'courses',
    template: `
          <h2>Courses</h2>
          {{title}}
          <ul>
            <li *ngFor="#course of courses">
              {{course}}
            </li>
          </ul>
          `
})
export class CoursesComponent {
    title = "The title of courses page";
    courses = ["Courses1", "Courses2", "Courses3"]
}
```
### Service
----
```
export class CourseService {
  getCourses() : string[] {
    return ["Courses1", "Courses2", "Courses3"];
  }
}
```
### Dependency Injection
----
```
import {Component} from 'angular2/core'
import {CourseService} from './course.service'

@Component({
    selector: 'courses',
    template: `
          <h2>Courses</h2>
          {{title}}
          <ul>
            <li *ngFor="#course of courses">
              {{course}}
            </li>
          </ul>
          `,
          providers: [CourseService] //this is dependency injection
})
export class CoursesComponent {
    title = "The title of courses page";
    courses;

    constructor(courseService: CourseService){
      this.courses = courseService.getCourses();
    }
}
```
