import {Component, Input, Output, EventEmitter} from 'angular2/core';

// @Component({
//     selector: 'heart',
//     template: `
//   <i
//     class="glyphicon"
//     [class.glyphicon-heart-empty]="!isFavorite"
//     [class.glyphicon-heart]="isFavorite"
//     (click)="onClick()"
//   ></i>
//   `,
//     styles: [`
//     .glyphicon-heart-empty{
//       color:#ccc
//     }
//     .glyphicon-heart{
//       color:deeppink
//     }
//   `]
// })
@Component({
    selector: 'like',
    template: `
  <i
    class="glyphicon glyphicon-heart"
    [class.highlighted]="iLike"
    (click)="onClick()"
  ></i>
  <span>{{ totalLikes }}</span>
  `,
    styles: [`
    .glyphicon-heart{
      color:#ccc;
      cursor:pointer;
    }
    .highlighted{
      color:orange
    }
  `]
})

export class HeartComponent {

    @Input() totalLikes = 0;
    @Input() iLike = false;

    //use decorater to make the private variable change become accessable from outside
    //@Output() change = new EventEmitter();// a class to publish events

    onClick() {
        this.iLike = !this.iLike;
        this.totalLikes += this.iLike ? 1 : -1;
    }
}
