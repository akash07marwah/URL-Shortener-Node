import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient) {
     
  }
  postUrl(url:String){
    return this.http.post("https://ancient-atoll-74988.herokuapp.com/api/url/shorten",{
      longUrl:url
    });
  }
}
