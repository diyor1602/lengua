import React, { useEffect, useState } from "react";
import { doc, getDoc, updateDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase"; // Import Firestore instance
import googlePlay from "/googlePlay.png";

const CountButton = () => {
  const [buttonPressed, setButtonPressed] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const hasPressed = localStorage.getItem("buttonPressed");

    if (hasPressed === "true") {
      setButtonPressed(true);
    }

    // Fetch the current count from Firestore
    const fetchCount = async () => {
      const docRef = doc(db, "presses", "global");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setCount(docSnap.data().count);
      }
    };

    fetchCount();
  }, []);

  const handleClick = async () => {
    localStorage.setItem("buttonPressed", "true");
    setButtonPressed(true);

    const docRef = doc(db, "presses", "global");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const newCount = docSnap.data().count + 1;
      await updateDoc(docRef, { count: newCount });
      setCount(newCount);
      console.log("Button press recorded, new count:", newCount);
    } else {
      await setDoc(docRef, { count: 1 });
      setCount(1);
      console.log("First button press recorded");
    }
  };

  return (
    <a
      href="https://github.com/diyor1602/lengua/releases/download/v1.0.0/app-release.apk"
      download
      onClick={handleClick}
      style={{
        display: "inline-block",
        backgroundColor: "transparent",
        color: "white",
        border: "none",
        cursor: "pointer",
      }}
    >
      <img src={googlePlay} alt="Download APK" />
    </a>
  );
};

export default CountButton;
