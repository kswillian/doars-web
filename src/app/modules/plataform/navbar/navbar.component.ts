import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Storage } from 'src/app/shared/util/Storage';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  storage: Storage = new Storage();

  ngOnInit(): void {
  }

  logout(): void{
    this.storage.removeAccessTokenToLocalStorage();
    this.router.navigate(['/']);    
  }

}
