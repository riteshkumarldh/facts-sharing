"use server";

import { db } from "@/lib/firebase";
import { addDoc, collection } from "firebase/firestore";

export const createFact = async (description: string, title: string) => {
  const data = {
    title,
    description,
    userId: "abc",
    createdAt: new Date().toISOString(),
  };

  try {
    const docRef = collection(db, "facts");
    const doc = await addDoc(docRef, data);
    return doc?.id;
  } catch (error) {
    return error;
  }
};
