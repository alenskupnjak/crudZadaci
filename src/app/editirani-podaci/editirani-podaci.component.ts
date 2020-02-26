import { Component, OnInit } from '@angular/core';


import {ZadatakService} from '../servisi/zadatak.service';
import { TaskInterface } from '../modeli/taskInterface';

@Component({
  selector: 'app-editirani-podaci',
  templateUrl: './editirani-podaci.component.html',
  styleUrls: ['./editirani-podaci.component.css']
})
export class EditiraniPodaciComponent implements OnInit {
  taskovi: TaskInterface[]; // vazno je staviti [] jer obuhvacamo cijlelo polje
  editStatus = false;
  taskZaEditiranje: TaskInterface; // ovdje ne stavljamo polje jer trazimo samo id

  constructor(private taskServis: ZadatakService) { }

  ngOnInit() {
    this.taskServis.povuciPodatke().subscribe(task => {
      this.taskovi = task;
    });
  }

  editCurso(event, task: TaskInterface) {
    this.editStatus = true;
    this.taskZaEditiranje = task;

    console.log(this.editStatus);
    console.log(this.taskZaEditiranje);
  }

  onUdpdateCurso(task: TaskInterface) {
    this.taskServis.osvjeziTask(task);
    this.clearState();
  }

  deleteCurso(event, task: TaskInterface) {
    this.taskServis.obrisiTask(task);
    this.clearState();
  }

  clearState() {
    this.editStatus = false;
    this.taskZaEditiranje = null;
  }



}
