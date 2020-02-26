import { Component, OnInit } from '@angular/core';


import {ZadatakService} from '../servisi/zadatak.service';

@Component({
  selector: 'app-editirani-podaci',
  templateUrl: './editirani-podaci.component.html',
  styleUrls: ['./editirani-podaci.component.css']
})
export class EditiraniPodaciComponent implements OnInit {

  constructor(private taskServis: ZadatakService) { }

  ngOnInit() {}



}
