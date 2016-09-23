# angular2 rapid tutorial
Practise ng2 with tutorials

## How to Run
Go to project direct and - > npm start   , project will be loaded in watch mode

# All in one CheatSheet
### Creating Components
```
import {Component} from ‘angular2/core’
@Component({
     selector: ‘courses’,
     template: ‘<h2>Courses</h2>
})
export class Component { }
```

### Using Components
```
//In AppComponent:

import {CoursesComponent} from ‘./courses.component’

@Component({
template: ‘<courses></courses>’, directives: [CoursesComponent]
})
```
### Templates
```
Interpolation  {{ title }}
Displaying lists:
<ul>
<li *ngFor=“#course of courses”>
{{ course }}  </li>
</ul>
```

### Services
```
export class CourseService {

}
```
### Dependency Injection
```
@Component({
providers: [CourseService]
})

export class CourseComponent {  constructor(courseService: CourseService) {   }
}
```

### Directives
```
import {Directive} from ‘angular2/core’

@Directive({
selector: [autoGrow],  host: {
‘(focus)’: ‘onFocus()’, ‘(blur)’: ‘onBlur()’
}  })

export class AutoGrowDirective {  onFocus() {
}
onBlur() {
}  }
```
### To access and modify DOM elements
```
import {ElementRef, Renderer} from ‘angular2/core’
export class AutoGrowDirective {
constructor(el: ElementRef, renderer: Renderer) {  }

onFocus(){
‘200’);  this.renderer.setElementStyle(this.el, ‘width’, }
}
```
# Code Tutorials
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
### Directive
* auto-grow.directive.ts
```
import {Directive, ElementRef, Renderer} from 'angular2/core'

@Directive({
    selector: '[autoGrow]',
    host: {
        '(focus)': 'onFocus()',
        '(blur)': 'onBlur()'
    }
})
export class AutoGrowDirective {
    //_el: ElementRef; old way to declare private var

    constructor(private el: ElementRef, private renderer: Renderer) {
        //this._el = el; old way to declare private var
    }
    onFocus() {
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '200')
    }
    onBlur() {
        this.renderer.setElementStyle(this.el.nativeElement, 'width', '120')
    }
}

```
* courses.component.ts
```
import {Component} from 'angular2/core'
import {CourseService} from './course.service'
import {AutoGrowDirective} from './auto-grow.directive';

@Component({
    selector: 'courses',
    template: `
          <h2>Courses</h2>
          {{title}}
          <input type="text" autoGrow/>
          <ul>
            <li *ngFor="#course of courses">
              {{course}}
            </li>
          </ul>
          `,
          providers: [CourseService],
          directives:[AutoGrowDirective]
})
export class CoursesComponent {
    title = "The title of courses page";
    courses;

    constructor(courseService: CourseService){
      this.courses = courseService.getCourses();
    }
}

```
