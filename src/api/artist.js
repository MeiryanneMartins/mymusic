import { setDoc, doc } from "firebase/firestore";
import { db } from "../utils";

export class Artist {
  collectionName = "artists";

  async create(name) {
    try {
      const created_at = new Date();
      const data = { name, created_at };
      const docRef = doc(db, this.collectionName);

      await setDoc(docRef, data);
    } catch (error) {
      throw error;
    }
  }
}

