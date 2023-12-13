import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { MaterialsModule } from '../../shared/materials/materials.module';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Brokers } from '../../core/models/brokers';
import { selectFeatureBrokers } from '../../shared/store/broker.selector';
import { BrokersState } from '../../shared/store/broker.reducer';
import { loadBrokers } from '../../shared/store/broker.actions';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MaterialsModule, CommonModule , FilterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent  implements OnInit{
 @Output() onCheckboxClicked = new EventEmitter<void>();
  datas!:  Observable<Brokers[]>
  brokers$ = this.store.select(selectFeatureBrokers);
  // data$!: Observable<any[]>;
  constructor(private store: Store<BrokersState>) {}
  onCheckboxClick() {
    this.onCheckboxClicked.emit();
  }
  ngOnInit() {
     // this.data$ = this.brokers.getDbData();
    this.store.dispatch(loadBrokers());
    this.brokers$.subscribe(data => {
      console.log("donnée",data)
      this.datas = this.brokers$
    });

  }
}
