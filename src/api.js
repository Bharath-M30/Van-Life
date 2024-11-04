import { initializeApp } from "firebase/app";
import { getFirestore, collection,getDoc, getDocs, doc, query, where } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyAZtJI1rgiMI78fLxzcY8nXwP2dqc7qmZk",
  authDomain: "vanlife-ac6e1.firebaseapp.com",
  projectId: "vanlife-ac6e1",
  storageBucket: "vanlife-ac6e1.firebasestorage.app",
  messagingSenderId: "552587927348",
  appId: "1:552587927348:web:dcb602e6b905481d790f61"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const vansCollectionRef = collection(db, "vans")

export async function getVans() {
    const snapshot = await getDocs(vansCollectionRef)

    const vans = snapshot.docs.map(doc => (
        {
            ...doc.data(),
            id: doc.id
        }
    ))

    return vans
}

export async function getVan(id) {
    const docRef = doc(db,"vans",id)
    const snapshot = await getDoc(docRef)

    return {
        ...snapshot.data(),
        id: snapshot.id
    }
}

export async function getHostVans() {
    const q = query(vansCollectionRef, where("hostId","==","123"))
    const snapshot = await getDocs(q)

    const vans = snapshot.docs.map(doc => (
        {
            ...doc.data(),
            id: doc.id
        }
    ))

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