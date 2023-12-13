import { tap } from 'rxjs/operators';
import { Insurer } from './../../models/insurer';
import { Component, OnInit, inject } from '@angular/core';
import { MaterialsModule } from '../../../../app/shared/materials/materials.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../../../features/home/home.component';
import { BrokersService } from '../../services/brokers.service';
import { Observable } from 'rxjs';
import { Brokers } from '../../models/brokers';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MaterialsModule, RouterModule, HomeComponent , CommonModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent implements OnInit {
  // datas!:  Observable<Brokers[]>
  datas$!: Observable<Insurer[]>;
  private readonly brokerService = inject(BrokersService);

  ngOnInit() {
    this.datas$ = this.brokerService
      .getAssureurs()
      .pipe(tap((data) => console.log('Mes données', data)));
  }
}
