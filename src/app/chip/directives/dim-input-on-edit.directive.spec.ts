import { ElementRef } from "@angular/core";
import { DimInputOnEditDirective } from "./dim-input-on-edit.directive";
import { ChipService } from "../chip.service";


describe('DimInputOnEditDirective', () => {
  it('should create an instance', () => {
    let chipService: ChipService = new ChipService();
    const el: ElementRef<any> = new ElementRef('div');
    const directive = new DimInputOnEditDirective(el, chipService);
    expect(directive).toBeTruthy();
  });
});
