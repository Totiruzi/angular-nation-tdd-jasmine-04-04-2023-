import { Directive, ElementRef } from '@angular/core';
import { ChipService } from '../chip.service';


@Directive({
  selector: '[appDimInputOnEdit]'
})
export class DimInputOnEditDirective {

  constructor(private elRef: ElementRef, private chipService: ChipService) { }

  ngOnInit(): void {
    this.chipService.iseditMode.subscribe( iseditMode => {
      this.elRef.nativeElement.style.border = iseditMode ? 
      '9px solid red' :
      ''
    })
  }
  // @HostListener('dbclick') onclick() {
    
  // }

  // @HostListener('mouseenter') onMouseEnter() {
  //   this.isbeingEdited ? this.elRef.nativeElement.style.border = '2px solid grey'
  //   : this.elRef.nativeElement.style.border = ''
  // }
}
