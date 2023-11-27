import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http: HttpClient) { }

  ruta: string = 'http://localhost/apimun/';

  public httpGetP(url: string) {
    return this.http.get(this.ruta + url)
  }


  private handleError(error: Response | any) {
    return error;
  }

}
