import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class CadastroGuard implements CanActivateChild {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.authService.isUsuarioAutenticado()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

}
