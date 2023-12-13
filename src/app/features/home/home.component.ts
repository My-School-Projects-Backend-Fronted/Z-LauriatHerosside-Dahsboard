import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { MaterialsModule } from '../../shared/materials/materials.module';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Brokers } from '../../core/models/brokers';
import { selectFeatureBrokers } from '../../shared/store/broker.selector';
import { BrokersState } from '../../shared/store/broker.reducer';
import { loadBrokers } from '../../shared/store/broker.actions';
import { FilterComponent } from '../filter/filter.component';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MaterialsModule, CommonModule , FilterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent  implements OnInit{
  badgeValue = 0;
  @Output() badgeValueChange = new EventEmitter<number>();
  @Input() toggleState!: boolean;
  datas!:  Observable<Brokers[]>
  brokers$ = this.store.select(selectFeatureBrokers);


  constructor(private store: Store<BrokersState>) {}
  ngOnInit() {
    this.store.dispatch(loadBrokers());
    this.brokers$.subscribe(data => {
      console.log("donnée",data)
      this.datas = this.brokers$
    });
  }

  onSelectChange(event: MatCheckboxChange) {
    if (event.checked) {
      this.badgeValue++;
    } else {
      this.badgeValue--;
    }
    this.badgeValueChange.emit(this.badgeValue);
  }
}
