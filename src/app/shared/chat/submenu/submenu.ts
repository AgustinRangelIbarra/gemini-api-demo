import { Component, output } from '@angular/core';
import { MODELS } from '../../../constants/models';
import { Model } from '../../../interfaces/model';

@Component({
  selector: 'app-submenu',
  imports: [],
  templateUrl: './submenu.html',
  styleUrl: './submenu.css',
})
export class Submenu {
  availableModels = Object.values(MODELS);
  onOptionSelection = output<Model>();

  modelSelection(model: Model) {
    this.onOptionSelection.emit(model);
  }
}
