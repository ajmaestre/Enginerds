import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  class_menu: string = 'fas fa-bars';
  class_header: string = 'header';
  class_navbar: string = 'navbar';

  constructor() { }

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

}
