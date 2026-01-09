"use client";
import { useState } from "react";

export default function Profile() {
  const [user, setUser] = useState({
    name: "John",
    age: 20,
    city: "Ulaanbaatar",
  });

  const changeName = () => {
    setUser({
      ...user,
      name: "Mike",
    });
  };

  return (
    <div className="flex flex-col items-center mt-20 gap-4">
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>City: {user.city}</p>

      <button onClick={changeName}>Change Name</button>
    </div>
  );
}
