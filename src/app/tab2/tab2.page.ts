import { Component, OnInit } from '@angular/core';
import { PatientService } from './patient.service';
import { Patient } from './patient.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  loadedPatients: Patient [];
  constructor(private patientService: PatientService) {}
  ngOnInit () {
    this.loadedPatients = this.patientService.patients;
  }
}
