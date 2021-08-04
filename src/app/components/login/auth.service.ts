import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioAutenticado: boolean = false;
  showHome = new EventEmitter<boolean>();

  constructor(private router: Router) { }
  fazerLogin(usuario: Usuario) {

    if (usuario.nome === 'usuario@email.com' && usuario.senha === '123456') {
      this.usuarioAutenticado = true;

      this.showHome.emit(true);

      this.router.navigate(['/cursos'])

    } else {
      this.usuarioAutenticado = false;
      this.showHome.emit(false)
    }
  }
}
