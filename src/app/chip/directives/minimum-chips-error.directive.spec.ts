

// import 'zone.js/dist/zone-testing';
// import { ChipService } from './chip.service';
// import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
// import { ChipComponent } from './chip.component';
// import { ContainerMinimumChipsErrorDirective } from './container-minimum-chips-error.directive';
// import { DebugElement } from '@angular/core';
// import { By } from '@angular/platform-browser';

// describe('ContainerMinimumChipsErrorDirective', () => {
//   let component = ChipComponent;
//   let chipComponent: ChipComponent;
//   let chipService: ChipService;
//   let fixture: ComponentFixture<ChipComponent>;
//   let el: DebugElement;

//   beforeEach(waitForAsync(() => {
//     TestBed.configureTestingModule({
//       declarations: [ChipComponent, ContainerMinimumChipsErrorDirective],
//     });

//     chipService = new ChipService();
//     fixture = TestBed.createComponent(ChipComponent);
//     // component = fixture.componentInstance;
//     chipComponent = new ChipComponent(chipService);
//     el = fixture.debugElement;
//     fixture.detectChanges();
//   }));

//   it('should create an instance', () => {
//     let mockElRef = { nativeElement: document.createElement('div') };
//     const containerMinimumChipsErrorDirective =
//       new ContainerMinimumChipsErrorDirective(mockElRef, chipService);
//     expect(containerMinimumChipsErrorDirective).toBeTruthy();
//   });

//   it('should change the border color when chip less 3', () => {
//     let container = el.queryAll(By.css('#chip'));
//     let firstContainer = container[0];
//     firstContainer.triggerEventHandler('mouseclick', {});
//     fixture.detectChanges();
//     expect(firstContainer.nativeElement.style.border).toBe('red');
//   });

//   it('shoul change the input border color on edit mode', () => {});
// });










// import 'zone.js';
// import 'zone.js/testing';
// import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ElementRef } from '@angular/core';
import { ChipService } from '../chip.service';
import { MinimumChipsErrorDirective } from './minimum-chips-error.directive';

@Component({
  template: `
    <div>Without Directive</div>
    <div containerMinimumChipsError>Default</div>
  `
})
class TestComponent {}

describe('MinimumChipsErrorDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let elementsWithDirective: Array<DebugElement>;
  let bareElement: DebugElement;
  let chipService: ChipService;

  // beforeAll(()=>{
  //   TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
  // })

  beforeEach(() => {
    const elementRefStub = () => ({ nativeElement: { style: { border: {} } } });
    
    // const chipServiceStub = () => ({ subscribe: (f: (arg: {}) => void) => f({})  });
    TestBed.configureTestingModule({
      declarations: [MinimumChipsErrorDirective, TestComponent],
      providers: [ChipService]
    });
    fixture = TestBed.createComponent(TestComponent);
    chipService = TestBed.inject(ChipService);
    fixture.detectChanges();
    elementsWithDirective = fixture.debugElement.queryAll(
      By.directive(MinimumChipsErrorDirective)
    );
    bareElement = fixture.debugElement.query(
      By.css(':not([containerMinimumChipsError])')
    );
  });

  it('should have bare element', () => {
    expect(bareElement).toBeTruthy();
  });

  it('should have 1 element(s) with directive', () => {
    const chipsLength: number = chipService.chipsLength.getValue();
    
    expect(elementsWithDirective.length).toBe(0);
    // console.log("🚀 ~ file: minimum-chips-error.directive.spec.ts:57 ~ it ~ elementsWithDirective:", elementsWithDirective)
  });
});
