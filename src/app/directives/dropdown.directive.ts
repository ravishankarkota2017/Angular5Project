import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})
export class DropDownDirective {
  @HostBinding('class.open') isDropDownOpened = false;
  @HostListener('click')
  dropdownClicked() {
    this.isDropDownOpened = !this.isDropDownOpened;
  }
}
