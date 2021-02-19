import { AfterViewInit, Component, OnInit } from '@angular/core';
import jQuery from 'jquery';

@Component({
  selector: 'app-app-base',
  templateUrl: './app-base.component.html',
  styleUrls: ['./app-base.component.css']
})
export class AppBaseComponent implements AfterViewInit {
  title = 'assets-app';

  ngAfterViewInit() {
    (function ($) {
      "use strict";

      var path = window.location.href;
      $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function () {
        if (this.href === path) {
          $(this).addClass("active");
        }
      });

      $("#sidebarToggle").on("click", function (e) {
        e.preventDefault();
        $("body").toggleClass("sb-sidenav-toggled");
      });
    })(jQuery);
  }
}
