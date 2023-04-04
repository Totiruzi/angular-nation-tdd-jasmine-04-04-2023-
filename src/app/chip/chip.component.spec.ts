import 'zone.js';
import 'zone.js/testing';
// import { jest } from '@jest/globals';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ChipService } from './chip.service';
import { FormsModule } from '@angular/forms';
import { ChipComponent } from './chip.component';

describe('ChipComponent', () => {
  let component: ChipComponent;
  let fixture: ComponentFixture<ChipComponent>;

  // beforeAll(()=>{
  //   TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
  // })

  beforeEach(async () => {
    const chipServiceStub = jasmine.createSpy()
    // const chipServiceStub = () => ({
    //   addChip: jest.fn(),
    //   removeChip: jest.fn(),
    //   editChip: jest.fn()
    // });
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ChipComponent],
      providers: [{ provide: ChipService, useFactory: chipServiceStub }]
    });
    
    fixture = TestBed.createComponent(ChipComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`chips has default value`, () => {
    expect(component.chips).toEqual([`Alan`, `Teo`, `Alvin`]);
  });

  it(`editMode has default value`, () => {
    expect(component.editMode).toEqual(false);
  });

  it(`addMode has default value`, () => {
    expect(component.addMode).toEqual(false);
  });

  // test('should call onChangeMode when button is clicked', () => {
  //   // const component = new ChipComponent();
  //   let onChangedModeCall = false;
  //   const spy = jest.spyOn(component, 'onChangeMode').mockImplementation(() => {
  //     onChangedModeCall = true;
  //     // console.log('onChangeMode spy called');
  //   });
  
  //   // simulate click on button
  //   component.onAddChip();
    
  //   expect(spy).toHaveBeenCalled();
  //   expect(component.onChangeMode).toHaveBeenCalled();
  //   expect(onChangedModeCall).toBeTruthy();
  // });

  // describe('onAddChip', () => {
  //   it('makes expected calls', () => {
  //     const chipServiceStub: ChipService = fixture.debugElement.injector.get(
  //       ChipService
  //     );
  //     jest.spyOn(component, 'onChangeMode') //.and.callThrough();
  //     jest.spyOn(component, 'onChangeMode') //.and.callThrough();
  //     jest.spyOn(chipServiceStub, 'addChip') //.and.callThrough();
  //     component.onAddChip();
  //     expect(component.onChangeMode).toHaveBeenCalled();
  //     expect(chipServiceStub.addChip).toHaveBeenCalled();
  //   });
  // });
});
