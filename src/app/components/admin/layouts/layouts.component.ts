import { Component } from '@angular/core';

declare let Scrollbar:any;

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css']
})
export class LayoutsComponent {
  isOpen: boolean = false;

  
openOrCloseSidebar(){
  this.isOpen = !this.isOpen;  
}

changeClass(){  
  if(this.isOpen){    
    return "ps show"
  }  
  return "";
}
}
