import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'vote',
    template: `
  <div class="vote">
  <i class= "glyphicon glyphicon-menu-up vote-button"
            [class.highlighted]="myVote == 1"
            (click)="upVote()"></i>
  <span class="vote-count">{{voteNum + myVote}}</span>
  <i class= "glyphicon glyphicon-menu-down vote-button"
            [class.highlighted]="myVote == -1"
            (click)="downVote()"></i>
  </div>
  `,
    styles: [`

  .vote{
    color:#999;
    width: 20px;
    font-size: 200%;
    text-aligh: center;
  }
  .highlighted{
    color:orange;
    font-weight:bold;
  }
  .vote-button{
    cursor:pointer;
  }
`]
})

export class VoteComponent {
    @Input() voteNum = 10;
    @Input() myVote = 0;


    @Output() vote = new EventEmitter();


    upVote() {
      if(this.myVote == 1)
        return;
      this.myVote++;
      this.vote.emit({myVote: this.myVote});

    }

    downVote() {
      if(this.myVote == -1)
        return;
      this.myVote--;
      this.vote.emit({myVote: this.myVote});
    }
}
