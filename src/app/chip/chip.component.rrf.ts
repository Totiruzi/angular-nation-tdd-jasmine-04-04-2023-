import 'zone.js'
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ChipService } from './chip.service';
import { FormsModule } from '@angular/forms';
import { ChipComponent } from './chip.component';

describe('ChipComponent', () => {
  let component: ChipComponent;
  let fixture: ComponentFixture<ChipComponent>;

  beforeEach(() => {
    const chipServiceStub = () => ({
      addChip: jest.fn(),
      removeChip: jest.fn(),
      editChip: jest.fn()
    });
    TestBed.configureTestingModule({
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

  describe('onAddChip', () => {
    it('makes expected calls', () => {
      const chipServiceStub: ChipService = fixture.debugElement.injector.get(
        ChipService
      );
      const spy = jest.spyOn(chipServiceStub, 'addChip');
      spy.mockImplementation((chip: string): any => {
        return {id: 7, label: ''};
      });
      component.onAddChip();
      expect(spy).toHaveBeenCalledWith('some value');
    });
  });
  
  
});
