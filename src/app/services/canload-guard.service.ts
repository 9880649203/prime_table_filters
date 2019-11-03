import { Injectable }       from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';
 
 
@Injectable()
export class CanloadGuardService implements CanLoad {
  constructor(private router: Router) {
  }
 
 
  canLoad(route: Route): boolean {
   let url: string = route.path;
    console.log('Url:', url);
    if (url=='address') {
      alert('You are not authorised to visit this page');
      return false;
    }
 
    //det
    
    return true; 
  }
  
} 
 