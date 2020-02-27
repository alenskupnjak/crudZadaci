import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskInterface} from '../modeli/taskInterface';
import { ZadatakService } from '../servisi/zadatak.service';

@Component({
  selector: 'app-ulazni-podaci',
  templateUrl: './ulazni-podaci.component.html',
  styleUrls: ['./ulazni-podaci.component.css']
})
export class UlazniPodaciComponent implements OnInit {

  task: TaskInterface = {
    ime: '',
    prezime: '',
    cijena: 0,
    jezik: '',
    datum: '',
    opis: ''
  };

  constructor(private taskServis: ZadatakService) { }

  ngOnInit() {}

  ulazniPodaciForme(forma: NgForm) {
    if (forma.valid === true) {
       this.taskServis.dodajTask(this.task);
       forma.resetForm();
    } else {
      console.log( 'Greška kod unosa podataka');
    }

  }
}
