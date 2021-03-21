import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jQuery from 'jquery';

@Component({
  selector: 'app-plataform',
  templateUrl: './plataform.component.html',
  styleUrls: ['./plataform.component.css']
})
export class PlataformComponent implements OnInit, AfterViewInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['plataforma/solicitacao/sangue']);
  }

  ngAfterViewInit(): void {
    (function($) {
      "use strict";
  
      // Add active state to sidbar nav links
      var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
          $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function() {
              if (this.href === path) {
                  $(this).addClass("active");
              }
          });
  
      // Toggle the side navigation
      $("#sidebarToggle").on("click", function(e) {
          e.preventDefault();
          $("body").toggleClass("sb-sidenav-toggled");
      });
  })(jQuery);
}  

}
