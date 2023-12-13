import { Component, ViewChild } from '@angular/core';
import { MaterialsModule } from '../../../../app/shared/materials/materials.module';
import { MatSidenav } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../../../features/home/home.component';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MaterialsModule, RouterModule , HomeComponent],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

}
