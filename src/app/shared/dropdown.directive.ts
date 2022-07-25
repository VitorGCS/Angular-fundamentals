import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen(){
    this.isOpen = !this.isOpen;
  }
  /*
  isopen = false;
  constructor(private elementRef: ElementRef, private renderer: Renderer2){} //inject the element where this directive is placed

  @HostListener('click') toggleOpen(eventData: Event){

    this.isOpen = !this.isOpen;
    if(this.isOpen){
      this.renderer.removeClass(this.elementRef.nativeElement, 'open' );
    }else {
      this.renderer.addClass(this.elementRef.nativeElement, 'open' );
    }

  }
    */

}
