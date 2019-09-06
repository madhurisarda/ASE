import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  @ViewChild('country') country: ElementRef;
  @ViewChild('city') city: ElementRef;

  weatherlist = [];

  constructor(private _http: HttpClient) {
  }

  showWeather() {
    this.country = this.country.nativeElement.value;
    this.city = this.city.nativeElement.value;

    if(this.country !== null && this.city !== null) {
      this._http.get('http://api.openweathermap.org/data/2.5/forecast?q='+this.city+','+this.country+'&cnt=8&APPID=3f6703048a4e801a52cf56dae55a53c8')
        .subscribe((data: any)=>{
          for (var i = 0; i < data.list.length; i++) {
            this.weatherlist[i] = {
                "speed": data.list[i].wind.speed,
                "deg": data.list[i].wind.deg,
              "temp": data.list[i].main.temp,
              "pressure": data.list[i].main.pressure,
              "humidity": data.list[i].main.humidity
            };
          }
        });
    }
  }
}
