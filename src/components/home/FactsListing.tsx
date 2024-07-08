import { db } from "@/lib/firebase";
import SingleFact from "./SingleFact";
import { collection, query, where, getDocs } from "firebase/firestore";
import { Fact } from "@/types";

// get all facts from firestore
const getFacts = async (userId: string) => {
  const array: Fact[] = [];
  const q = query(collection(db, "facts"), where("userId", "==", userId));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    const data = {
      id: doc.id,
      title: doc.data()?.title,
      description: doc.data()?.description,
      userId: doc.data()?.userId,
    };

    array.push(data);
  });

  return array;
};

export default async function FactsListing() {
  const allFacts = await getFacts("xyz");

  return (
    <div className="flex flex-col gap-4">
      {allFacts?.map((_, i) => {
        return <SingleFact key={i} />;
      })}
    </div>
  );
}
