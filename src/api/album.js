import { doc, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { db } from "../utils";

export class album {
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
}