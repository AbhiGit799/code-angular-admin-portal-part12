import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private  currentUser : BehaviorSubject<any> = new BehaviorSubject<any>(null);
private  isLoggedIn : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

//BehaviorSubject if refresh so loggedout.

get currentUser$(){
  return this.currentUser.asObservable();
}

get isLoggedIn$(){
  return this.isLoggedIn.asObservable();
}

  constructor(private router: Router)  //router object to navigate to dashboard 
  { }

  authLogin(res: any) {
    //local storage ka data loss nahi hota hai on refresh
    //debugger
    localStorage.setItem("userDetails", JSON.stringify(res)); //res will come as object
    this.router.navigate(['dashboard/default']);
    this.currentUser.next(res);
    this.isLoggedIn.next(true);
  }

  logout(){
    this.currentUser.next(null);
    this.isLoggedIn.next(false);
  }

}
