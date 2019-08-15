import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'URL-shortener';
  uri : String;
  shortUrl : String = "";
  constructor(private api: ApiService){
  }
  onSubmit(){
    console.log(this.uri);
    let response;
    this.api.postUrl(this.uri).subscribe(res => {
      console.log(res);
      response = res; 
      this.shortUrl = response.shortUrl;
    })
  }
}
