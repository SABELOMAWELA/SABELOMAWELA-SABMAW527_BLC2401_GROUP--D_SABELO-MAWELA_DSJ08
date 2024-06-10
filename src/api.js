import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc , getDoc , query ,  where } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyAQlYkSmBGnc4CQIBhkCjFALSAmwehavGc",
  authDomain: "vanlife-6f190.firebaseapp.com",
  projectId: "vanlife-6f190",
  storageBucket: "vanlife-6f190.appspot.com",
  messagingSenderId: "678829553976",
  appId: "1:678829553976:web:f1985d8616d8e08efd29cd",
  measurementId: "G-4G2SQ8YPL9"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)






const vansCollectionRef = collection(db, "vans")

export async function getVans() {
    const snapshot = await getDocs(vansCollectionRef)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return vans
}

export async function getVan(id) {
    const docRef = doc(db, "vans", id)
    const snapshot = await getDoc(docRef)
    return {
        ...snapshot.data(),
        id: snapshot.id
    }
}




function sleep(ms) {
    return new Promise(resolve => setTimeout(() => resolve(), ms))
}

export async function getHostVans() {
    const q = query(vansCollectionRef,where("hostId", "==", "123"))
    const snapshot = await getDocs(q)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return vans
}


export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}