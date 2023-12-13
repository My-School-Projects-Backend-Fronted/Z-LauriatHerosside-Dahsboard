import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MaterialsModule } from '../../shared/materials/materials.module';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [MaterialsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  @Input() badgeValue!: number;
  @Output() toggleChange = new EventEmitter<boolean>();
  toggleState: boolean = false;
  onToggleChange(checked: boolean) {
    this.toggleState = checked;
    this.toggleChange.emit(checked);
  }
}
