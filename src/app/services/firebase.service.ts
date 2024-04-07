import { Injectable } from '@angular/core';
import { FirebaseApp, initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { Analytics, getAnalytics } from "firebase/analytics";
import { environment } from '../../environment/environment';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private app: FirebaseApp;
  // private analytics: Analytics;
  private database: any;
  private booksRef: any;
  public db: any = false;

  constructor() {
    this.app = initializeApp(environment.firebaseConfig);
    // this.analytics = getAnalytics(this.app);
    this.database = getFirestore(this.app)
    this.booksRef = collection(this.database, 'books')
    getDocs(this.booksRef)
      .then((snapshot) => {
        const test = snapshot.docs.map((item) => {          
          let itemData = item.data() as object
          return {
            id: item.id,
            ...itemData
          }
        })
        console.log(test);
        this.db = test
        
      })
  }
}
