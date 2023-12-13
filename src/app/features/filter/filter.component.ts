import { Component } from '@angular/core';
import { MaterialsModule } from '../../shared/materials/materials.module';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [MaterialsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  badgeValue = 0;
  onCheckboxClicked() {
    this.badgeValue++;
  }
}
