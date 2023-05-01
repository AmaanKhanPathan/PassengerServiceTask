import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ipassenger } from 'src/app/shared/model/passenger';
import { PassengerService } from 'src/app/shared/services/passenger.service';

@Component({
  selector: 'app-pass-details',
  templateUrl: './pass-details.component.html',
  styleUrls: ['./pass-details.component.scss']
})
export class PassDetailsComponent implements OnInit {
  @Input() passObj! : Ipassenger
  @Output() emitPassInfo : EventEmitter<Ipassenger> = new EventEmitter<Ipassenger>()
  isEditable : boolean = false;

  constructor(private _passengerService : PassengerService) { }

  ngOnInit(): void {
  }
  onDone(pname : string){
    console.log(pname);
    this.isEditable = !this.isEditable
    this._passengerService.updatePassengerFullname(this.passObj.id, pname)
    
  }
  onRemove(){
    this._passengerService.removePassenger(this.passObj.id, this.passObj.fullname)
    this.emitPassInfo.emit(this.passObj)
  }

}
