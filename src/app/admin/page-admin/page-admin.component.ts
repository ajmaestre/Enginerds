import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-admin',
  templateUrl: './page-admin.component.html',
  styleUrls: ['./page-admin.component.css']
})
export class PageAdminComponent implements OnInit {

  class_submenu: string = 'submenu hide';

  constructor() { }

  ngOnInit(): void {
  }

  
  showSubMenu(){
    const test = /hide/;
    if(test.test(this.class_submenu)){
      this.class_submenu = 'submenu show';
    }else{
      this.class_submenu = 'submenu hide';
    }
  }


  onLoad(event: Event): void {
    // const element = event.target as HTMLInputElement;
    // const file = element.files?.item(0);
    // if (file) {
    //   this.saveImageSubscription = this.profileService.saveImage(file)
    //   .subscribe(res => {
    //     this.getProflie();
    //   });
    // }
  }

}
