import { collection, addDoc, where, query, getDocs, deleteDoc, updateDoc, doc, getDoc, DocumentReference, DocumentData, FieldPath, setDoc } from "firebase/firestore";
import { /* bucket, */ db } from "../firebase/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const camerasGetAccess = async (filterData: {
  district: string | null;
  status: boolean | null;
}) => {
  const homeCollection = collection(db, "users"); 

  let filters = [];

  const districtQuery = where("district", "==", filterData.district);
  const statusQuery = where("status", "==", filterData.status);

  if (filterData.district) {
    filters.push(districtQuery);
  }

  if (filterData.status !== null) {
    filters.push(statusQuery);
  }

  /// logic to push all queries, if all values are null
  /* if (Object.values(filterData).every((value) => value === null)) {
    filters.push(cameraQuery, stateQuery, cityQuery, districtQuery); // Replace with an existing field
  } 
 */
  let homeCompoundQuery = query(homeCollection, ...filters);

  const response = await getDocs(homeCompoundQuery);
  const resultArray: any[] = [];

  // Iterate over the documents and push relevant data to the array
  response.forEach((doc) => {
    const data = doc.data();
    resultArray.push({
      id: doc.id,
      ...data
    });
  });

  // Return the array of retrieved elements
  return resultArray;
}