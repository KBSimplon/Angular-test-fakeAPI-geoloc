import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import * as L from 'leaflet';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private http: HttpClient) {}  
  
  ngOnInit() {
      const map = L.map('mapid').setView([48.53, 2.14], 5);

      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: 'Map'
      }).addTo(map);
      
      const myIcon = L.icon({
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
      });
      
      // L.marker([50.6311634, 3.0599573], {icon: myIcon}).bindPopup('Je suis un Marqueur').addTo(map).openPopup();

      this.http.get('http://localhost:3000/shops').subscribe((data: any) => {
        data.forEach(shop => {
          L.marker([shop.lat, shop.lng], {icon: myIcon}).bindPopup("<strong>" + shop.Nom + "</strong>" + "<br><em>Adresse: </em>" + shop.Adresse1 + ", " + shop.CP_Ville + ",<br><em>Telephone: </em>" + shop.Telephone + ',<br><a href="' + shop.extra + '"><strong>Site web</strong></a>' + ',<br><a href="http://localhost:4200/detail/' + shop.id + '"><strong>Details</strong></a>' ).addTo(map);
        });
      });
      
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((function (position) {
              var marker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(map);
              marker.bindPopup("Ma position :<br> Latitude : " + position.coords.latitude + ',<br>Longitude ' + position.coords.longitude).openPopup();
          }));
      } else {
          alert("La géolocalisation n'est pas supportée par ce navigateur.");
      }
    }
}
