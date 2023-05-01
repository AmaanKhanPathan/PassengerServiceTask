import { Injectable } from '@angular/core';
import { Ipassenger } from '../model/passenger';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {

  constructor(private _snackBarService : SnackbarService ) { }

  passengerArray : Array<Ipassenger> = [
    {
      id: 1,
      fullname: 'Stephen',
      checkedIn: true,
      checkInDate: 1490742000000,
      children: null
  }, {
      id: 2,
      fullname: 'Robert',
      checkedIn: false,
      checkInDate: null,
      children: [{ name: 'Ted', age: 12 }, { name: 'Chloe', age: 7 }]
  }, {
      id: 3,
      fullname: 'James',
      checkedIn: true,
      checkInDate: 1491606000000,
      children: null
  }, {
      id: 4,
      fullname: 'Sarah',
      checkedIn: true,
      checkInDate: 1488412800000,
      children: [{ name: 'Jessica', age: 1 }]
  }, {
      id: 5,
      fullname: 'Marvan',
      checkedIn: false,
      checkInDate: null,
      children: null
  }];

  getAllPAssenger(){
    return this.passengerArray;
  }
  updatePassengerFullname(id : number, updatedName : string){
    this.passengerArray.forEach(pass => {
      if(pass.id === id){
        pass.fullname = updatedName;
        this._snackBarService.onOpenSnackBar(`The passenger name ${updatedName} is updated to passenger Data`)
      }
    })

  }

  removePassenger(id : number, name : string){
    let passIndex = this.passengerArray.findIndex(pass => pass.id === id);
    this.passengerArray.splice(passIndex, 1)
    this._snackBarService.onOpenSnackBar(`${name} is removed from passenger Data`)
  }
  checkInPassengerCount(){
    return this.passengerArray.filter(pass => pass.checkedIn).length
  }
  
}
