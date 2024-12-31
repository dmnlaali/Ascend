import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDvBlNSIGAA7RRkBE2PLZuKv7yUAQYfPnU",
  authDomain: "ascend-dma.firebaseapp.com",
  projectId: "ascend-dma",
  storageBucket: "ascend-dma.firebasestorage.app",
  messagingSenderId: "49364310725",
  appId: "1:49364310725:web:c98c7d1d09f36d2ba32eac",
  measurementId: "G-8NGTQBJXMJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);