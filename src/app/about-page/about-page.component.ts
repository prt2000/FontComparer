import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {
  apiUrl='https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDPl3AeyeTNt_QUX1CaF_jRTRonz1dkti4';
  fonts:any = [];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getFonts();
  }

  getFonts(){
      this.http.get<any>('apiUrl').subscribe(
      response => {
      console.log(response);
      this.fonts = response;
    }
  );
  }

}
