# angular2 rapid tutorial
Practise ng2 with tutorials

## How to Run
* Update environment of nodejs and npm
     -  download and install nodejs
     - $ npm install -g typescript
     - $ npm install -g typings
* for first init, $ npm install
* $ npm start   , project will be loaded in watch mode

### NPM internal problem (for windows)
* If you accidentally updated npm on windows, it might kill itself when update failed and npm won't be working thereafter. It's so annoying to reinstall nodejs on windows. But thank god I figured it out: go to your user/.../appdata/roaming folder(it is default hidden) and delete those npm files... then reinstall nodejs
* '#WindowsGoToHell#PleaseCodingOnMac'


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
----
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
----
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

### Binding
* interpolation ： 插值 --> used in ng1 ng2 as expresseion -- > eg {{data.id}}

  - property binding is one way: component -> view(DOM), e.g :
  ```
    <img [src]="imageUrl"/>
  ```

  - class binding
    ```
    @Component（{
      selector:'my-app',
      template:`
        <button class="btn btn-primay" [class.active="isActive"]>Submit</button>
      `
    }）
    export class AppComponent{
      isActive = true;
      //isActive = false;
    }
    ```
  - style binding
  ```
  @Component（{
    selector:'my-app',
    template:`
      <button class="btn btn-primay"
      [style.backgroundColor]="isActive ? 'blue' : 'gray'">Submit</button>
    `
  }）
  export class AppComponent{
    isActive = true;
    //isActive = false;
  }
  ```
    - event binding
    ```
    @Component（{
      selector:'my-app',
      template:`
      <div (click) = "onDivClick()">
        <button (click)= "onClick($event)">Submit</button>
      </div>
        <button on-click = "onClick()">Submit</button>
      `
    }）
    export class AppComponent{
      //onClick(){
        //console.log("Clicked");
      //}
      onClick($event){
        console.log("Clicked",$event);
      }
      onDivClick(){
        // $event.stopPropagation();//stop div binding传播
        console.log("Handled by div");
      }
    }

    ```
## Two Way Data binding
* In angular 1, two way data binding is ngModel  
```
import {Component} from 'angular2/core'
@Component（{
  selector:'my-app',
  template:`
    <input type="text" [value]="title" (inpuit)="title = $event.target.value" />
    <input type = "button" (click) = "title = '' " value = "clear" />
    Preview:{{title}}

  `
}）
export class AppComponent{
  title = "Angular App";
}
```
  **first way: [value]="title"
  **2nd way: (inpuit)="title = $event.target.value"

* Use ngModel to achieve 2way binding with less code
