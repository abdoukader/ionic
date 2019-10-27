import { Component } from '@angular/core';
import {Geolocation} from '@ionic-native/geolocation/ngx';

declare var google: any;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
 
  map: any;

  constructor(public geolocation: Geolocation) {
      this.load();
  }

   
  load() {
      this.geolocation.getCurrentPosition().then((resp) => {
          let lat = resp.coords.latitude;
          let lng = resp.coords.longitude;
          const latLng = new google.maps.LatLng(lat, lng);
          this.map = new google.maps.Map(document.getElementById('map_canvas'), {
              zoom: 14,
              center: latLng,
              mapTypeId: google.maps.MapTypeId.ROADMAP,
              mapTypeControl: false
          });

      });
  }
}
