import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
declare const responsiveVoice: any;
@Component({
  selector: 'app-search-food',
  templateUrl: './search-food.component.html',
  styleUrls: ['./search-food.component.css']
})
export class SearchFoodComponent implements OnInit {
  @ViewChild('foodItem') foodItem: ElementRef;
  nutrition = [];
  foodItemValue: any;
  currentLat: any;
  currentLong: any;
  geolocationPosition: any;

  constructor(private _http: HttpClient, private router: Router) {
  }

  ngOnInit() {

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.geolocationPosition = position;
        this.currentLat= position.coords.latitude;
        this.currentLong= position.coords.longitude;
      })
  }

  getInformation() {
    this.foodItemValue = this.foodItem.nativeElement.value;
    if(this.foodItemValue !== null && this.foodItemValue != "") {
      this._http.get(' https://api.nutritionix.com/v1_1/search/' + this.foodItemValue + '?results=0:1&fields=*&appId=8c64d3f3&appKey=cf6e93bfdd30f35a3064a9ad0ae2c250')
        .subscribe((data: any)=>{
          for (var i = 0; i < data.hits.length; i++) {
            this.nutrition[i] = {
              "calories": data.hits[i].fields.nf_calories,
              "servingWeightGrams": data.hits[i].fields.nf_serving_weight_grams
            };
            responsiveVoice.speak("The calories in "+this.foodItemValue+" is "+this.nutrition[i].calories);
            responsiveVoice.speak("The serving weight in grams of "+this.foodItemValue+" is "+this.nutrition[i].servingWeightGrams);
          }
        });
    }
  }
  logout() {
    this.router.navigate(['/login']);
  }
}
