import { Injectable } from '@angular/core';
import { Patient } from './patient.model'

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private _patients: Patient[]=[
    new Patient(
      'p1',
      'Leonardo Dicaprio',
      '../assets/imgs/Leo.jpg',
    ),
  ];
  get patients(){
    return [...this._patients];
  }

  constructor() { }
}
