import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent {

  //I can get tihs rating value as an input to this component using input decorator
  @Input() rating: any ;
  //let me also get another property isReadOnly
  @Input() isReadOnly:boolean = false;
  //throught which we can make this rating component configurable
  //now in home component I am going to use this app star rating.

  constructor(){

  }
}
