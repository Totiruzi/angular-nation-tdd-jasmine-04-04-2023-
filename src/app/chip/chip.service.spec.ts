import "@angular/compiler";
import { Chip, ChipService } from './chip.service';
import { ChipUpperCasedPipe } from "./directives/uppercase.pipe";


describe('ChipService', () => {
  let chipService: ChipService;
  let chips: Array<Chip> = [];
  let upperCasedPipe: ChipUpperCasedPipe;

  beforeEach(() => {
    chipService = new ChipService();
    chips = chipService.getChips();
    upperCasedPipe = new ChipUpperCasedPipe()
  });

  it('1. should be created', () => {
    expect(chipService).toBeTruthy();
  });

  it('2. should add a chip ', () => {
    chipService.addChip('Mike');
    chips = chipService.getChips();
    let lastChipIndex = chips.length - 1;
    const nameToUppercase = (chips[lastChipIndex].label).toUpperCase()
    console.log(`name to uppercase ${nameToUppercase}`)
    console.log("🚀 ~ file: chip.service.spec.ts:23 ~ it ~ chips:", chips[lastChipIndex].label)
    
    expect(chips.length).toBe(7);
    expect(chips[lastChipIndex]).toEqual({
      id: lastChipIndex + 1,
      label: 'Mike',
    });
    const chipLabel = chips[lastChipIndex].label
    expect(upperCasedPipe.transform(chipLabel)).toEqual(nameToUppercase);
    console.log(`pipe.transform(chips[lastChipIndex].label) ${upperCasedPipe.transform(chips[lastChipIndex].label)}`)
  });

  it('3. should edit a chip', () => {
    // const chipService: ChipService = TestBed.get(ChipService);
    chipService.addChip('Mike');
    chips = chipService.getChips();
    console.log("🚀 ~ file: chip.service.spec.ts:29 ~ it ~ chips:", chips)
    let findChipMike: number = chips.findIndex((chip) => chip.label == 'Mike');
    if (findChipMike > -1) {
      let editedLabel: string = 'Michael';
      chipService.editChip(findChipMike, editedLabel);
      chips = chipService.getChips();
    }
    
    let chipsLength = chips.length;
    expect(chips.length).toBe(chipsLength);
    expect(chips[findChipMike].label).toBe('Michael');
  });

  it('4. should remove a chip', () => {
    // const chipService: ChipService = TestBed.get(ChipService);
    chipService.addChip('Mike');
    chipService.removeChip(0);
    chips = chipService.getChips();
    let chipsLength = chips.length;
    expect(chips.length).toBe(chipsLength);
  });
});
