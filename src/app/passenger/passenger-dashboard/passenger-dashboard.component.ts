import { Component, OnInit } from '@angular/core';
import { Ipassenger } from 'src/app/shared/model/passenger';
import { PassengerService } from 'src/app/shared/services/passenger.service';

@Component({
  selector: 'app-passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.scss']
})
export class PassengerDashboardComponent implements OnInit {
  passengerArray : Array<Ipassenger> = []
  checkedInCount! : number
  constructor(private _passengerService : PassengerService) { }

  ngOnInit(): void {
    this.passengerArray = this._passengerService.getAllPAssenger()
    // console.log(this.passengerArray);
    this.checkedInCount = this.passengerArray.filter(pass => pass.checkedIn).length    
  }

  onRemoveUpdate(eve : any){
    this.checkedInCount = this.passengerArray.filter(pass => pass.checkedIn).length    

  }

}
