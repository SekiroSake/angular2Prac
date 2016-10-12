import {Component} from 'angular2/core';
//import {CoursesComponent} from './courses.component';
//import {AuthorComponent} from './author.component';
import {FavoriteComponent} from './favorite.component';

@Component({
    selector: 'my-app',
    // template: '<h1>HelloAngularMy First Angular 2 App</h1><courses></courses>'+
    // '<authors></authors>',
    // directives: [CoursesComponent,AuthorComponent]
    template:`
      <favorite [isFavorite] = "post.isFavorite" (change)="onFavoriteChange($event)"></favorite>
    `,
    directives:[FavoriteComponent]
})
export class AppComponent {
  post = {
    title:"Title",
    isFavorite: true
  }
  onFavoriteChange($event){
    console.log($event);
  }
}
