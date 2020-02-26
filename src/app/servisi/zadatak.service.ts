import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {TaskInterface } from '../modeli/taskInterface';

@Injectable({
  providedIn: 'root'
})
export class ZadatakService {
  zapis: AngularFirestoreCollection<TaskInterface>;
  task: Observable<TaskInterface[]>;  // vazno je ovdije staviti polje []
  zapisDoc: AngularFirestoreDocument<TaskInterface>;

  constructor(private database: AngularFirestore) { }

  povuciPodatke() {
    this.zapis = this.database.collection<TaskInterface>('taskovi');

    return this.task = this.zapis.snapshotChanges()
    .pipe(map(data => data.map(a => {
      const taskovi = a.payload.doc.data() as TaskInterface;
      const id = a.payload.doc.id;
      return {id, ...taskovi}
    })));
  }

  dodajTask(curso: TaskInterface) {
    console.log('NEW COURSE');
    this.zapis.add(curso);
  }

  obrisiTask(task: TaskInterface) {
    this.zapisDoc = this.database.doc(`taskovi/${task.id}`);
    this.zapisDoc.delete();
  }

  osvjeziTask(task: TaskInterface) {
    this.zapisDoc = this.database.doc(`taskovi/${task.id}`);
    this.zapisDoc.update(task);
  }


}
