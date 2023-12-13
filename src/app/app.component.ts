import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MaterialsModule } from '../app/shared/materials/materials.module';
import { ToolbarComponent } from './core/components/toolbar/toolbar.component';
import { SidenavComponent } from './core/components/sidenav/sidenav.component';
import { FilterComponent } from './features/filter/filter.component';
import { HomeComponent } from './features/home/home.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MaterialsModule,
    ToolbarComponent,
    SidenavComponent,
    RouterModule,
    FilterComponent,
    HomeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  badgeValue = 0;
  toggleState: boolean = false;

  onBadgeValueChange(value: number) {
    this.badgeValue = value;
  }
  onToggleChange(state: boolean) {
    this.toggleState = state;
  }
}
