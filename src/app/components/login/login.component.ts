import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginForm } from 'src/app/shared/model/LoginForm';
import { LoginDTO } from 'src/app/shared/model/LoginDTO';
import { Storage } from 'src/app/shared/util/Storage';

import { LoginService } from './login.service';

import jQuery from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

  selected: boolean = false;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  email: string;
  senha: string;
  success: boolean;

  storage: Storage = new Storage();

  ngOnInit(): void {
    this.storage.removeAccessTokenToLocalStorage();
  }

  ngAfterViewInit(): void {
    (function ($) {

      // Variables
      var clickedTab = $(".tabs > .active");
      var tabWrapper = $(".tab__content");
      var activeTab = tabWrapper.find(".active");
      var activeTabHeight = activeTab.outerHeight();

      // Show tab on page load
      activeTab.show();

      // Set height of wrapper on page load
      tabWrapper.height(activeTabHeight);

      $(".tabs > li").on("click", function () {

        // Remove class from active tab
        $(".tabs > li").removeClass("active");

        // Add class active to clicked tab
        $(this).addClass("active");

        // Update clickedTab variable
        clickedTab = $(".tabs .active");

        // fade out active tab
        activeTab.fadeOut(250, function () {

          // Remove active class all tabs
          $(".tab__content > li").removeClass("active");

          // Get index of clicked tab
          var clickedTabIndex = clickedTab.index();

          // Add class active to corresponding tab
          $(".tab__content > li").eq(clickedTabIndex).addClass("active");

          // update new active tab
          activeTab = $(".tab__content > .active");

          // Update variable
          activeTabHeight = activeTab.outerHeight();

          // Animate height of wrapper to new tab height
          tabWrapper.stop().delay(50).animate({
            height: activeTabHeight
          }, 500, function () {

            // Fade in active tab
            activeTab.delay(50).fadeIn(250);

          });
        });
      });
    })(jQuery)
  }
  
  onSubmit() {

    this.loginService.login(this.getFormParams()).subscribe(
      success => {

        let loginDTO: LoginDTO = success;
        this.navitateToPlataform();
        this.storage.addAccessTokenToLocalStorage(loginDTO);

      },
      error => {
        this.storage.removeAccessTokenToLocalStorage();
      }
    );

  }

  navitateToPlataform() {
    this.router.navigate(['plataforma']);
  }

  getFormParams() {
    const loginForm: LoginForm = new LoginForm();
    loginForm.email = this.email;
    loginForm.senha = this.senha;
    return loginForm;
  }

  setSelected(): boolean {
    return this.selected ? false : true
  }

}
