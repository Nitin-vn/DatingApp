import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  model: any = {};
  currentUser$: Observable<User | null> = of(null)

  constructor(public accountService : AccountService) {}

  ngOnit(): void{
    this.currentUser$ = this.accountService.currentUser$;
  }

  login(){
    this.accountService.login(this.model).subscribe({
      next: response => {
        console.log(response);
      },
      error: error => console.log(error)
    })
    console.log(this.model);
  }

  logout(){
    this.accountService.logout();
  }

}
