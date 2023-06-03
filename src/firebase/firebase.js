import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log(process.env)

async function getCities() {
  // const citiesCol = collection(db, 'cities');
  // const citySnapshot = await getDocs(citiesCol);
  // const cityList = citySnapshot.docs.map(doc => doc.data());
  // console.log(cityList);

  console.log(process.env)
}

export default getCities;

