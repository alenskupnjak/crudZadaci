import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {TaskInterface } from '../modeli/taskInterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZadatakService {

  constructor(private database: AngularFirestore) { }
  zapis: AngularFirestoreCollection<TaskInterface>;
  task: Observable<TaskInterface[]>;  // vazno je ovdije staviti polje []
  zapisDoc: AngularFirestoreDocument<TaskInterface>;
}
