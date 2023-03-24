import { FirebaseOptions, initializeApp } from 'firebase/app'
import { collection, getDocs, getFirestore } from 'firebase/firestore/lite'

const {
  FB_API_KEY,
  FB_AUTH_DOMAIN,
  FB_DB_URL,
  FB_PROJECT_ID,
  FB_STORAGE_BUCKET,
  FB_MESSAGING_SENDER_ID,
  FB_APP_ID,
  FB_MEASUREMENT_ID,
} = process.env

const firebaseConfig: FirebaseOptions = {
  apiKey: FB_API_KEY,
  authDomain: FB_AUTH_DOMAIN,
  databaseURL: FB_DB_URL,
  projectId: FB_PROJECT_ID,
  storageBucket: FB_STORAGE_BUCKET,
  messagingSenderId: FB_MESSAGING_SENDER_ID,
  appId: FB_APP_ID,
  measurementId: FB_MEASUREMENT_ID,
};


const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export async function getProjects() {
  const projects = collection(db, 'projects')
  const snapshot = await getDocs(projects)
  return snapshot.docs.map(doc => doc.data())
}
