import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { ChipService } from '../chip.service';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { MinimumChipsErrorDirective } from './minimum-chips-error.directive';


@Component({
  template: '<div containerMinimumChipsError></div>'
})
class TestComponent {}

describe('MinimumChipsErrorDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  let directiveElement: DebugElement;
  let chipService: ChipService;

  beforeEach(async () => {
    const chipServiceSpy = jest.spyOn(ChipService.prototype, 'chipsLength', 'get');
    const returnObservable: unknown = of([2])
    chipServiceSpy.mockReturnValue(returnObservable as BehaviorSubject<number>);

    await TestBed.configureTestingModule({
      declarations: [ MinimumChipsErrorDirective, TestComponent ],
      providers: [
        { provide: ChipService, useValue: chipServiceSpy }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    directiveElement = fixture.debugElement.query(By.directive(MinimumChipsErrorDirective));
    chipService = TestBed.inject(ChipService);
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have the directive applied', () => {
    expect(directiveElement).toBeTruthy();
  });

  it('should apply border style when chips length is less than 3', () => {
    const divElement: HTMLDivElement = directiveElement.nativeElement;
    expect(divElement.style.border).toBe('2px solid red');

    chipService.chipsLength.next(3);
    fixture.detectChanges();

    expect(divElement.style.border).toBe('');
  });

  // Add more tests here as needed

});
