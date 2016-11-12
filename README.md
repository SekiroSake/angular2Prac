# angular2 rapid tutorial

Practise ng2 with tutorials

## How to Run

- Update environment of nodejs and npm

  - download and install nodejs
  - $ npm install -g typescript
  - $ npm install -g typings

- for first init, $ npm install

- $ npm start , project will be loaded in watch mode

### NPM internal problem (for windows)

- If you accidentally updated npm on windows, it might kill itself when update failed and npm won't be working thereafter. It's so annoying to reinstall nodejs on windows. But thank god I figured it out: go to your user/.../appdata/roaming folder(it is default hidden) and delete those npm files... then reinstall nodejs
- '#WindowsGoToHell#PleaseCodingOnMac'

# All in one CheatSheet
## Http: get() map() and subscribe() - important concepts imported from rxjs
- get() get the http request
- map() map the result to any format, e.g.   .map(res => res.json());
- subscribe() subscribe to the observable. .subscribe is the function that actually executes the observable.

### share()

- the usage of share()

## Class and Interface
- Interface:Interfaces are only at compile time. This allows only you to check that the expected data received 
- Class: present at runtime (constructor function) and you can define methods in them with processing. should hava new xx()
  - 
  ```typescript
  this.http.get('...')
    .map(res => {
      var data = res.json();
      return data.map(d => {
        return new Product(d.productNumber,
          d.productName, d.productDescription);
      });
    });
  ```
## Creating Components

  ```typescript
import {Component} from ‘angular2/core’
@Component({
     selector: ‘courses’,
     template: ‘<h2>Courses</h2>
})
export class Component { }
```

## Using Components

```typescript
//In AppComponent:

import {CoursesComponent} from ‘./courses.component’

@Component({
template: ‘<courses></courses>’, directives: [CoursesComponent]
})
```

## Templates

  ```typescript
Interpolation  {{ title }}
Displaying lists:
<ul>
<li *ngFor=“#course of courses”>
{{ course }}  </li>
</ul>
```

## Services

  ```typescript
export class CourseService {

}
```

## Dependency Injection

  ```typescript
@Component({
providers: [CourseService]
})

export class CourseComponent {  constructor(courseService: CourseService) {   }
}
```

## Directives

  ```typescript
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

## To access and modify DOM elements

  ```typescript
import {ElementRef, Renderer} from ‘angular2/core’
export class AutoGrowDirective {
constructor(el: ElementRef, renderer: Renderer) {  }

onFocus(){
‘200’);  this.renderer.setElementStyle(this.el, ‘width’, }
}
```

# Code Tutorials

## Template with ul and ngFor

--------------------------------------------------------------------------------

  ```typescript
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

## Service

--------------------------------------------------------------------------------

  ```typescript
export class CourseService {
  getCourses() : string[] {
    return ["Courses1", "Courses2", "Courses3"];
  }
}
```

## Dependency Injection

--------------------------------------------------------------------------------
  ```typescript
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

## Directive

## * auto-grow.directive.ts

  ```typescript
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

## * courses.component.ts
  ```typescript
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

- interpolation ： 插值 --> used in ng1 ng2 as expresseion -- > eg {{data.id}}

  - property binding is one way: component -> view(DOM), e.g :

      ```typescript
    <img [src]="imageUrl"/>
    ```

  - class binding

      ```typescript
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

  ```typescript
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

    - event binding ` `` @Component（{ selector:'my-app', template:`

      <div (click)="onDivClick()">
        <button (click)="onClick($event)">Submit</button>
      </div>

      <button on-click="onClick()">Submit</button>

      ` }） export class AppComponent{ //onClick(){ //console.log("Clicked"); //} onClick($event){ console.log("Clicked",$event); } onDivClick(){ // $event.stopPropagation();//stop div binding传播 console.log("Handled by div"); } }

    ```

    ## Two Way Data binding

- two way binding is just the combo of property binding and event binding

  - ng2 may two one binding as two one way , so that it could be easier to debug

- In angular 1, two way data binding is ngModel

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

  _first way: [value]="title" ;_ _2nd way: (inpuit)="title = $event.target.value"_

- Use ngModel to achieve 2way binding with less code

```
import {Component} from 'angular2/core'
@Component（{
  selector:'my-app',
  template:`
    <input type="text" [value]="title" (inpuit)="title = $event.target.value" />
    <input type="text" [(ngModel)]="title" />
    <input type="text" bindon-ngModel="title" />

    <input type = "button" (click) = "title = '' " value = "clear" />
    Preview:{{title}}

  `
}）
export class AppComponent{
  title = "Angular App";
}
```

## Reusable component

### Input Properties

- Using @Input annotation

  ```
  import    {Input}    from    ‘angular2/core’;    
  @Component(…)    
  export    class    FavoriteComponent    {    
                @Input(‘is-favorite’)    isFavorite    =    false;    
  }
  ```

- Using component metadata

  ```
  @Component({
                inputs:    [‘isFavorite:is-favorite’]
  })    
  export    class    FavoriteComponent    {    
                isFavorite    =    false;    
  }
  ```

- In the host component

  ```
  <favorite    [is-favorite]=“post.isFavorite”></favorite>
  ```

### Output Properties

- Using @Output annotation

  ```
  import    {Output}    from    ‘angular2/core’;    
  @Component(…)    
  export    class    FavoriteComponent    {    
                @Output(‘favorite-change’)    change    =    new    EventEmitter();

                onClick()    {
                                this.change.emit({    newValue:    this.isFavorite    });
                }    
  }
  ```

- Using component metadata

  ```
  @Component({
                outputs:    [‘change:favoriteChange’]
  })    
  export    class    FavoriteComponent    {    
                change    =    new    EventEmitter();

                onClick()    {
                                this.change.emit({    newValue:    this.isFavorite    });
                }    
  }
  ```

- In the host component

  ```
  <favorite    (favoriteChange)=“onChange()”></favorite>
  ```

### Templates

```
  @Component({
                        template:    ‘…’,    //    or    
                        templateUrl:    ‘app/template.template.html’
  })
```

### Styles

```
  @Component({
                          styles:    [‘…’],    
                          styleUrls:     [‘…’,    ‘…’];
                          })
```

## ngIf && [hidden]
- If ngIf returns false, the <div> will not be rendered in html
- If Hidden is true, however, the <div> is still in html, it's just not showing
  * [hidden] will take more memory space, so if the div tree is big, use  ngif rather than [hidden]
  * But, if the whole tree is show/hide repeatly, using [hidden] is a better choice, because ngif will delete and insert the div again and again

## ngSwitch and if

## The Leading Asterisk (``` * ```)
- Make ```*ngFor, *ngIf``` understandable by angular2

## Pipes(管道)
Buikt-in Pipes
- Uppercase
- Lowercase
- Decimal
- Currency
- Date
- Json
* eg --> {{course.title | uppercase }}
* Json -- > Object object --> JSON format

## ngClass
- see favorite.template.html
- This class means the css class

## ngStyle
- set multiple incline style simultaneously

## angular life cycle
- OnInit
- OnDestroy
- DoCheck
- OnChanges
- AfterContentChecked
- AfterViewInit
- AfterViewChecked

## static type checking
```
export interface Post{
  userId: number;
  id: number;
  title: String;
  body: String;
}
```

## Promise and observable
- A Promise handles a single callback when an async operation completes or fails.
- An Observable is like a Stream (in many languages) and allows to pass zero or more events where the callback is called for each event.
- Observable provides operators like map, forEach, reduce, ... similar to an array

* promise:
  - returns a single value
  - not cancellable
* observable
  - works with multiple values over time
  - cancellable
  - supports map, filter, reduce and similar operators
  - proposed feature for ES 2016
  - use Reactive Extensions (RxJS)
  - an array whose items arrive asynchronously over time
### Angular 2 uses Rx.js Observables instead of promises for dealing with HTTP.

## Routers- for SPA
- Config
```
//under app.components.ts, before @Component, set routes
@RouteConfig([
  { path:'/albums', name:'Albums', component:AlbumsComponent, useAsDefault: true},
  { path:'/contact', name:'contact', component: ContactComponent},
  {path:'/*other',name: 'Other', redirectTo:['Albums'] }
  ])
@Component({
   selector:'my-app',
   templateUrl:'/app/app.component.html'
  })
```

- Route Outlet
```
//in html
<router-outlet></router-outlet>
```

<<<<<<< HEAD
<form #f="ngForm">
etc
<button [disabled]="!f.valid">Submit</button></form>

`- Submitting the form when submit`

<form #f="ngForm" (ngsubmit)="onSubmit(f.form)">
 etc
<button type="submit">Submit</button></form>

```
=======
- maintain routers
  * DDD : Domain driven dev

- Use shared folder
>>>>>>> b16e61625cf120cc6ba3fe6fbccae0ad62c9a85f
