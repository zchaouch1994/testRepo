import { Component, OnInit } from '@angular/core';
import {LocationsService} from '../services/locations.service';
import {Place} from '../model/place.model';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.page.html',
  styleUrls: ['./suggestion.page.scss'],
})
export class SuggestionPage implements OnInit {

  private dataplaces;
  //private currentPlace: Place;
  constructor(private locService:LocationsService) { }

  ngOnInit() {


  // this.currentPlace=this.locService.currentLocation;
   //console.log(this.currentPlace.title);

    this.locService.getPlaces()
        .subscribe(data=>{
          this.dataplaces=data;
        },err=>{
          console.log(err);
        })

  }

}
