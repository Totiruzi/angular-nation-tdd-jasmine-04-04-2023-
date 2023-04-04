import { Component, OnInit, ViewChild } from '@angular/core';
import { ChipService } from './chip.service';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
})
export class ChipComponent implements OnInit {
  @ViewChild('editedChip') editedChip: string = '';
  chips: Array<string> = ['Alan', 'Teo', 'Alvin'];
  editMode: boolean = false;
  addMode: boolean = false;
  newChip: string = '';
  selectedIndex: number = -1;

  constructor(public chipService: ChipService) {}

  ngOnInit(): void {}

  onAddChip() {
    this.chipService.addChip(this.newChip);
    this.newChip = '';
    this.onChangeMode('reset');
  }

  removeChip(index: number) {
    console.log(
      '🚀 ~ file: chip.component.ts:27 ~ ChipComponent ~ removeChip ~ index:',
      index
    );
    if (!this.editMode && !this.addMode) {
      console.log(
        '🚀 ~ file: chip.component.ts:29 ~ ChipComponent ~ removeChip ~ this.editMode:',
        this.editMode
      );
      console.log(
        '🚀 ~ file: chip.component.ts:29 ~ ChipComponent ~ removeChip ~ this.addMode:',
        this.addMode
      );
      this.chipService.removeChip(index);
      this.onChangeMode('reset');
    }
  }

  turnEditModeOn(chip: any, idx: number) {
    console.log(
      '🚀 ~ file: chip.component.ts:21 ~ ChipComponent ~ turnEditModeOn ~ chip',
      chip
    );
    this.onChangeMode('edit');
    this.editedChip = chip.label;
    this.selectedIndex = idx;
  }

  editChip(index: number, newChip: string) {
    this.chipService.editChip(index, newChip);
    this.editMode = false;
  }

  addListModal() {
    console.log('Popup Modal to add List of Chips');
  }

  onChangeMode(mode: string) {
    console.log(
      '🚀 ~ file: chip.component.ts:56 ~ ChipComponent ~ onChangeMode ~ mode:',
      mode
    );
    switch (mode) {
      case 'add':
        this.editMode = false;
        this.addMode = true;
        break;

      case 'edit':
        this.editMode = true;
        this.addMode = false;
        break;

      default:
        this.editMode = false;
        this.addMode = false;
        break;
    }
  }

  trackByMethod(index: number, el: any): number {
    return el.id;
  }
}
