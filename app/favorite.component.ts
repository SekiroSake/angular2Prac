import {Component, Input, Output,EventEmitter} from 'angular2/core';

//Put more info that can be put in component metadata
//Comonnet are metadata
@Component({
  selector:'favorite',
  template:`
  <i
    class="glyphicon"
    [class.glyphicon-star-empty]="!isFavorite" 
    [class.glyphicon-star]="isFavorite"
    (click)="onClick()">
  </i>
  `
})

//logic goes to class
export class FavoriteComponent{
  @Input() isFavorite = false;

//use decorater to make the private variable change become accessable from outside
  @Output() change = new EventEmitter();// a class to publish events

  onClick(){
    this.isFavorite = !this.isFavorite;
    this.change.emit({newValue: this.isFavorite});
  }
}
