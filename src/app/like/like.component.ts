import { Component, OnInit, Input, Output } from '@angular/core';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})  
export class LikeComponent {
  @Input('isLiked') isActive: boolean;
  @Input('likesCount') likesCount = 0;
  //@Output('change') change = new EventEmitter();

  onClick(){

    this.likesCount += (this.isActive) ? -1 : 1;

    this.isActive = !this.isActive;

    //this.change.emit('change', { isLiked: this.isActive, likesCount: this.likesCount })

  }
}

export interface likeChangedEventArgs {
  isLiked: boolean;
  likesCount: Int16Array;
}
