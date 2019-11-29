import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  apiURL: string= 'http://api.giphy.com/v1/gifs/search?&api_key=WKm3QPuPIp4gRHJTQnFBWKA7UsbFh77c&limit=15'
  
  constructor(private http: HttpClient) { }

  getGiphy(searchcontent){
    this.apiURL = this.apiURL + '&q='+searchcontent;
    return this.http.get(`${this.apiURL}`);
  }

}
