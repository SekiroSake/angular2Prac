import {Component, Input, Output, EventEmitter} from 'angular2/core';

//Put more info that can be put in component metadata
//Comonnet are metadata
@Component({
    selector: 'favorite',
    // Template to a link
    // template:`
    // <i
    //   class="glyphicon"
    //   [class.glyphicon-star-empty]="!isFavorite"
    //   [class.glyphicon-star]="isFavorite"
    //   (click)="onClick()">
    // </i>
    // `

    //external template instead of inline template
    templateUrl: 'app/favorite.template.html',
    //
    styles: [`
      .glyphicon-star {
        color:orange;
      }
    `],
    //styleUrls:[]
})

//logic goes to class
export class FavoriteComponent {
    @Input() isFavorite = false;

    //use decorater to make the private variable change become accessable from outside
    @Output() change = new EventEmitter();// a class to publish events

    onClick() {
        this.isFavorite = !this.isFavorite;
        this.change.emit({ newValue: this.isFavorite });
    }
}
