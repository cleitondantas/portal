import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SharedService } from '../services/shared.service';

@Injectable({
  providedIn: 'root'
})
export class AnaliseGuard implements CanActivate {
  constructor(
    private sharedService: SharedService,
    private router: Router
  ){}

  canActivate(
    next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (((this.sharedService.temporario != null) && (this.sharedService.temporario.length != 0)) ||
          (sessionStorage.getItem('ANALISESELECIONADA') != "undefined" && sessionStorage.getItem('ANALISESELECIONADA') != null)) {
        return true;
      }
      this.router.navigate(['/home'])
      return false;
  }
}
