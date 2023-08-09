import { Injectable } from '@angular/core';
import { Category } from 'src/app/interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class AddCategoryService {

  showModal: boolean = false;
  id: number = 0;
  modeUpdate: boolean = false;

  constructor() { }

  modalShowed(modeUp: boolean, idCategory: number){
    this.id = idCategory;
    this.showModal = true;
    this.modeUpdate = modeUp;
  }

}
