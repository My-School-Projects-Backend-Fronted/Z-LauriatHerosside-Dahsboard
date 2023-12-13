import { Component, ViewChild } from '@angular/core';
import { MaterialsModule } from '../../../../app/shared/materials/materials.module';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { SidenavComponent } from '../sidenav/sidenav.component';
@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MaterialsModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
//   @ViewChild(MatSidenav)
//   sidenav!: SidenavComponent;
//   isMobile = true;

//  constructor(private observer : BreakpointObserver){

//  }
//  ngOnInit() {
//    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
//      if(screenSize.matches){
//        this.isMobile = true;
//      } else {
//        this.isMobile = false;
//      }
//    });
//  }
}
