import { Usuario } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.sass']
})
export class PainelComponent implements OnInit {

  user = {
    name: '',
    username: '',
    password: ''
  }

  // element?: Usuario


  constructor(private loginservice: LoginService, private router: Router) { }

  ngOnInit(): void {

  }

  login(){
    this.loginservice.Login().subscribe({
      next: (resultado) =>{
        console.log(resultado) //aqui vem a array
          if (resultado[0].username == this.user.username && resultado[0].password == this.user.password) {
            localStorage.setItem('existe', 'true') // método do local storage 1º nome da variável = existe; 2º condição = true

            console.log(this.user)
            return this.router.navigate(['/adm']) // o cão de guarda ativa aqui
          } else {

            localStorage.setItem('existe', 'false')
            console.log(this.user)
            return this.router.navigate(['/adm'])
          }

         },
      error: (error) => {console.error(error)},
      complete: () => {console.info('ok')}
    })}
}
