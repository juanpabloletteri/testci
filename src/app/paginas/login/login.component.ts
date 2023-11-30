import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/clases/usuario';
import { HttpService } from 'src/app/servicios/http.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userform!: FormGroup;
  mail!: string;
  password!: string;
  miUsuario = new Usuario();

  constructor(private fb: FormBuilder, private mihttp: HttpService, public http: HttpClient) { }

  ngOnInit() {
    this.userform = this.fb.group({
      'mail': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
    });
  }

  registrar() {

  }

  onSubmit(value: string) {
    this.miUsuario.mail = this.userform.value.mail;
    this.miUsuario.password = this.userform.value.password;

    let data = JSON.stringify({ mail: "1", password: "1" });


    //let headers = new HttpHeaders({ token: 'pirulo' });
    //let options = new HttpRequest({ 'headers': headers });

    console.log("pasarr---", this.miUsuario);

    this.http.post<string>('http://localhost/apimun/login', this.miUsuario)
      .subscribe(res => {
        console.log("respuesta", res)
      });

  }
  /*
    verificarusuario(data: any): void {
      this.http.httpPost('login', data)
        .subscribe(res => {
          console.log("ASSASSASASA", res);
          //return data;
        })
    }*/

}
