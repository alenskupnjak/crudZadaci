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
    ime: 'Ema',
    prezime: 'Skupnjaj',
    cijena: '10',
    jezik: 'Eng',
    datum: '02/20/200',
    opis: 'Opisni diio'
  };

  constructor(private taskServis: ZadatakService) { }

  ngOnInit() {}

  ulazniPodaciForme(forma: NgForm) {
    console.log(forma.valid);
    console.log(forma);
    if (forma.valid === true) {
       console.log(this.task);
       this.taskServis.dodajTask(this.task);
       forma.resetForm();
    } else {
      console.log( 'Greška');
    }

  }
}
