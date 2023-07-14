import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  class_menu: string = 'fas fa-bars';
  class_header: string = 'header';
  class_navbar: string = 'navbar';

  style_route = {
    'color': '#06D43D',
  };
  route_one = {};
  route_two = {};
  route_three = {};
  route_four = {};
  route_five = {};
  route_six = {};
  route_seven = {};

  constructor(private router: Router) {
    this.route_one = this.style_route;
    this.route_two = {};
    this.route_three = {};
    this.route_four = {};
    this.route_five = {};
    this.route_six = {};
    this.route_seven = {};
    this.router.events.subscribe((event: Event) => {

        if (event instanceof NavigationEnd) {
            this.isRoute(event.url);
        }

    });
  }

  ngOnInit(): void {
  }

  showMenu(){
    const test = /fa-times/;
    if(test.test(this.class_menu)){
      this.class_menu = 'fas fa-bars';
      this.class_header = 'header';
      this.class_navbar = 'navbar';
    }else{
      this.class_menu = 'fas fa-bars fa-times';
      this.class_header = 'header active';
      this.class_navbar = 'navbar active';
    }
  }

  isRoute(route: string){
    const regexp_one = /home-user/;
    const regexp_two = /beginner-user/;
    const regexp_three = /subscription-user/;
    const regexp_four = /blog-user/;
    const regexp_five = /resource-user/;
    const regexp_six = /about-user/;
    const regexp_seven = /contact-user/;
    if(regexp_one.test(route)){
      this.route_one = this.style_route;
      this.route_two = {};
      this.route_three = {};
      this.route_four = {};
      this.route_five = {};
      this.route_six = {};
      this.route_seven = {};
    }else if(regexp_two.test(route)){
      this.route_two = this.style_route;
      this.route_one = {};
      this.route_three = {};
      this.route_four = {};
      this.route_five = {};
      this.route_seven = {};
      this.route_six = {};
    }else if(regexp_three.test(route)){
      this.route_three = this.style_route;
      this.route_two = {};
      this.route_one = {};
      this.route_four = {};
      this.route_five = {};
      this.route_seven = {};
      this.route_six = {};
    }else if(regexp_four.test(route)){
      this.route_four = this.style_route;
      this.route_two = {};
      this.route_three = {};
      this.route_one = {};
      this.route_five = {};
      this.route_seven = {};
      this.route_six = {};
    }else if(regexp_five.test(route)){
      this.route_five = this.style_route;
      this.route_two = {};
      this.route_three = {};
      this.route_four = {};
      this.route_one = {};
      this.route_seven = {};
      this.route_six = {};
    }else if(regexp_six.test(route)){
      this.route_six = this.style_route;
      this.route_two = {};
      this.route_three = {};
      this.route_four = {};
      this.route_five = {};
      this.route_seven = {};
      this.route_one = {};
    }else if(regexp_seven.test(route)){
      this.route_seven = this.style_route;
      this.route_two = {};
      this.route_three = {};
      this.route_four = {};
      this.route_five = {};
      this.route_six = {};
      this.route_one = {};
    }
  }

}
