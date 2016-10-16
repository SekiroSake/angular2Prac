import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorComponent} from './author.component';
import {FavoriteComponent} from './favorite.component';
import {HeartComponent} from './heart.component';
import {VoteComponent} from './vote.component';
import {SummaryPipe} from './summary.pipe'

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
      <div [hidden]="courses.length == 0">
        List of courses test1
      </div>
      <div [hidden]="courses.length > 0">
        List of courses test2
      </div>
      <div *ngIf="courses.length == 0">
        You don't have any courses yet.
      </div>
      <ul class="nav nav-pills">
        <li [class.active]="viewMode == 'map'"><a (click)="viewMode = 'map'">Map View</a></li>
        <li [class.active]="viewMode == 'list'"><a (click)="viewMode = 'list'">List View</a></li>
      </ul>
      <div [ngSwitch] = "viewMode">
        <template [ngSwitchWhen]="'map'">Map View Content</template>
        <template [ngSwitchWhen]="'list'">List View Content</template>
      </div>
      <ul>
        <li *ngFor="#course of courses,#i = index">
            {{ i + 1}} - {{course}}
        </li>
      </ul>
      {{post.title}}
      <br/>
      {{post.body | summary:3}}
    `,
    pipes: [SummaryPipe],
    directives: [CoursesComponent, AuthorComponent, FavoriteComponent, HeartComponent,VoteComponent]
})
export class AppComponent {
    courses = ['course 1', 'course 2', 'course 3'];
    /*viewMode = 'map' can be replace as ngSwitchDefault inside the target template div*/
    viewMode = 'map';//this is init, make the default option for the list

    post = {
        title: "Angular Tutorial",
        body:'123456789十1112',
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
