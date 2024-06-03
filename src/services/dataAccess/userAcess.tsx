import { collection, addDoc, where, query, getDocs, deleteDoc, updateDoc, doc, getDoc, DocumentReference, DocumentData, FieldPath, setDoc } from "firebase/firestore";
import { /* bucket, */ db } from "../firebase/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const GetUsersAccess = async (filterData: {
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

export const GetUsersAccessFilter = async (filterData: {
  district: string | null;
  tags: string[] | null;
  status: boolean | null;
}) => {
  const homeCollection = collection(db, "users");
  let filters = [];

  if (filterData.district) {
    filters.push(where("district", "==", filterData.district));
  }

  if (filterData.status !== null) {
    filters.push(where("status", "==", filterData.status));
  }

  if (filterData.tags && filterData.tags.length > 0) {
    filters.push(where("tagsList", "array-contains-any", filterData.tags));
  }

  if (Object.values(filterData).every(value => value === null)) {
    // If all filter values are null, return all documents
    const response = await getDocs(homeCollection);
    const resultArray: any[] = [];
    response.forEach(doc => {
      resultArray.push({ id: doc.id, ...doc.data() });
    });
    return resultArray;
  } else {
    let homeCompoundQuery = query(homeCollection, ...filters);
    const response = await getDocs(homeCompoundQuery);
    const resultArray: any[] = [];
    response.forEach(doc => {
      resultArray.push({ id: doc.id, ...doc.data() });
    });
    return resultArray;
  }
};

export const usersGetByDeviceIdAccess = async (id: string): Promise<any> => {
  try {
    const camerasCollection = collection(db, 'users');
    const docRef = doc(camerasCollection, id);

    const docSnapshot = await getDoc(docRef);
    
    if (docSnapshot.exists()) {
      const data = docSnapshot.data();
      
      const result: any = {
        id: docSnapshot.id,
        ...data
      };
      
      return result;
    } else {
      throw new Error(`No document found for device code ${id}`);
    }

  } catch (error) {
    console.error('Error getting device document by device code:', error);
    throw error;
  }
};

export const userUpdateSchedulesConfigAccess = async (deviceToUpdateId: string, updatedData: any) => {
  try {
    const camerasCollection = collection(db, 'users'); // Update collection name
    const docRef = doc(camerasCollection, deviceToUpdateId);

    // Retrieve the document snapshot
    const docSnapshot = await getDoc(docRef);

    // Check if the document exists
    if (docSnapshot.exists()) {
      // Merge the existing data with the updated data
      const updatedCameraData = {
        ...docSnapshot.data(), // retain existing data
        schedulesConfigs: updatedData
      };

      // Update the document in the 'camerasCollection' with the updatedCameraData
      await setDoc(docRef, updatedCameraData);

      console.log("Document with deviceToUpdateId:", deviceToUpdateId, "updated successfully");
    } else {
      console.error("Document with deviceToUpdateId:", deviceToUpdateId, "does not exist");
    }
  } catch (error) {
    // Handle errors
    console.error('Error updating device document:', error);
    throw error;
  }
};

export const userAddOriginScheduleAccess = async (deviceToUpdateId: string, addData: any) => {
  try {
    const camerasCollection = collection(db, 'users'); // Update collection name
    const docRef = doc(camerasCollection, deviceToUpdateId);

    // Retrieve the document snapshot
    const docSnapshot = await getDoc(docRef);

    // Check if the document exists
    if (docSnapshot.exists()) {
      // Merge the existing data with the updated data
      const existingData = docSnapshot.data();
      if (existingData && existingData.userSchedules && existingData.userSchedules.SchedulesCreateByMe) {
        existingData.userSchedules.SchedulesCreateByMe.push(addData);
      } else {
        // If the array doesn't exist, create it and add the data
        existingData.userSchedules = {
          SchedulesCreateByMe: [addData],
          SchedulesCreateByOthers: existingData.userSchedules ? existingData.userSchedules.SchedulesCreateByOthers : []
        };
      }

      // Update the document in the 'camerasCollection' with the updated data
      await setDoc(docRef, existingData);

      console.log("Document with deviceToUpdateId:", deviceToUpdateId, "updated successfully");
    } else {
      console.error("Document with deviceToUpdateId:", deviceToUpdateId, "does not exist");
    }
  } catch (error) {
    // Handle errors
    console.error('Error updating device document:', error);
    throw error;
  }
};

export const userAddDestinityScheduleAccess = async (deviceToUpdateId: string, addData: any) => {
  try {
    const camerasCollection = collection(db, 'users'); // Update collection name
    const docRef = doc(camerasCollection, deviceToUpdateId);

    // Retrieve the document snapshot
    const docSnapshot = await getDoc(docRef);

    // Check if the document exists
    if (docSnapshot.exists()) {
      // Merge the existing data with the updated data
      const existingData = docSnapshot.data();
      if (existingData && existingData.userSchedules && existingData.userSchedules.SchedulesCreateByOthers) {
        existingData.userSchedules.SchedulesCreateByOthers.push(addData);
      } else {
        // If the array doesn't exist, create it and add the data
        existingData.userSchedules = {
          SchedulesCreateByOthers: [addData],
          SchedulesCreateByMe: existingData.userSchedules ? existingData.userSchedules.SchedulesCreateByMe : []
        };
      }

      // Update the document in the 'camerasCollection' with the updated data
      await setDoc(docRef, existingData);

      console.log("Document with deviceToUpdateId:", deviceToUpdateId, "updated successfully");
    } else {
      console.error("Document with deviceToUpdateId:", deviceToUpdateId, "does not exist");
    }
  } catch (error) {
    // Handle errors
    console.error('Error updating device document:', error);
    throw error;
  }
};