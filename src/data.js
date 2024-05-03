import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDocs, addDoc, deleteDoc, updateDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBxfP48qKRqszoZBZXWGgWbvf_26eLx69k",
    authDomain: "mark-and-lily.firebaseapp.com",
    projectId: "mark-and-lily",
    storageBucket: "mark-and-lily.appspot.com",
    messagingSenderId: "1011839188617",
    appId: "1:1011839188617:web:6dfb37cc92460633aed058",
    measurementId: "G-CNT0FTK4N5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const getAllDates = async () => {
    return await getDocs(collection(db, "dates"));
}

const createDate = async dateInfo => {
    try {
        const docRef = await addDoc(collection(db, "dates"), dateInfo);

        return docRef.id;
    } catch (e) {
        console.error("Error adding document: ", e);
        return null;
    };
}

const deleteDate = async id => {
    await deleteDoc(doc(db, "dates", id));
}

const changeDate = async (dateId, newInfo) => {
    await updateDoc(doc(db, "dates", dateId), newInfo);
}

export { getAllDates, createDate, deleteDate, changeDate };