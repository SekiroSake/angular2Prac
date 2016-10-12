import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorComponent} from './author.component';
import {FavoriteComponent} from './favorite.component';
import {HeartComponent} from './heart.component';
import {VoteComponent} from './vote.component';

@Component({
    selector: 'my-app',
    // template: '<h1>HelloAngularMy First Angular 2 App</h1><courses></courses>'+
    // '<authors></authors>',
    // directives: [CoursesComponent,AuthorComponent]
    template: `
      <h1>HelloAngularMy First Angular 2 App</h1><courses></courses>
      <authors></authors>
      <i class = "glyphicon glyphicon-star"></i>
      <favorite [isFavorite] = "post.isFavorite" (change)="onFavoriteChange($event)"></favorite>
      <like [iLike] =  "post.iLike" [totalLikes] = "post.totalLikes"></like>
      <vote
            [voteNum]="post.voteNum"
            [myVote]="post.myVote">
      </vote>
    `,
    directives: [CoursesComponent, AuthorComponent, FavoriteComponent, HeartComponent,VoteComponent]
})
export class AppComponent {
    post = {
        title: "Title",
        isFavorite: true,
        totalLikes: 10,
        iLike: false,
        voteNum:10,
        myVote:0
    };
    onFavoriteChange($event) {
        console.log($event);
    }
}
