import { Component } from '@angular/core';
import { HttpService } from 'src/app/servicios/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private http: HttpService) { }

  ngOnInit() {

    this.http.httpGetP('traerTodosLosExpedientes')
      .subscribe((res) => console.log("prueba", res));
  }

}
