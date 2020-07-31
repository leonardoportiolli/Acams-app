import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Item { name: string; }

@Injectable()
export class CustomerService {
  private collection: AngularFirestoreCollection<Item>;

  constructor(private firestore: AngularFirestore) {
    this.collection = this.firestore.collection('customers', ref => ref.orderBy('created', 'asc'));
  }

  load(id) {
    if (id)
      return this.firestore.doc<any>('customers/' + id);

    return this.collection.valueChanges();
  }

  add(item) {
    return this.collection.doc(item.id).set(item);
  }

  update(id, data) {
    if (!id) {
      return false;
    }

    const item = this.firestore.doc<any>('customers/' + id);

    return item.update(data);
  }

  delete(id) {
    if (!id) {
      return false;
    }

    return this.firestore.doc<any>('customers/' + id).delete();
  }
}
