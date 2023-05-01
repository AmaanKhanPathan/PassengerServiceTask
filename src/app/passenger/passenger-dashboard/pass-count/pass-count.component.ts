import { Component, Input, OnInit } from '@angular/core';
import { PassengerService } from 'src/app/shared/services/passenger.service';

@Component({
  selector: 'app-pass-count',
  templateUrl: './pass-count.component.html',
  styleUrls: ['./pass-count.component.scss']
})
export class PassCountComponent implements OnInit {
  @Input() totalPassengerCount! : number
  @Input() totalCheckedInCount! : number

  constructor(private _passengerService : PassengerService) { }

  ngOnInit(): void {
  }

}
