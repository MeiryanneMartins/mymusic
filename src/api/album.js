import { doc, setDoc, collection, getDocs } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { map } from "lodash";
import { db } from "../utils";

export class Album {
  collectionName = "albums";

  async create(name, artist) {
    try {
      const id = uuidv4();
      const created_at = new Date();
      const data = { id, name, artist, created_at };

      const docRef = doc(db, this.collectionName, id);
      await setDoc(docRef, data);
    } catch (error) {
      throw error;
    }
  }

  async obtainAll(){
    try {
      const colletionRef = collection(db, this.collectionName);
      const snapshot = await getDocs(colletionRef);
      return map(snapshot.docs, (doc) => doc.data());
    } catch (error) {
      throw error;
    }
  }
}