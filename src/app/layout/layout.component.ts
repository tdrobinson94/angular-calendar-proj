import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onResize(e) {
    if ($(window).width() < 800) {
      console.log('Window is less than 800px');
      $('.hamburger').removeClass('is-active');
      $('.mobile-nav-toggle').show();
      $('header nav').hide();
    } else {
      console.log('Window is larger than 800px');
      $('.mobile-nav-toggle').hide();
      $('header nav').show().removeClass('show-nav');
    }
  }

  clickNavButton() {
    $('.hamburger').toggleClass('is-active');
    $('header nav').show().toggleClass('show-nav');
  }

  clickLink() {
    if ($(window).width() < 800) {
      $('.hamburger').toggleClass('is-active');
      $('header nav').removeClass('show-nav');
    }
  }

}
