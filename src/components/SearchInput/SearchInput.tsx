"use client";
import React, { useState } from "react";

const SearchInput = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setValue(query);
    // Only call getQuery after 500ms of inactivity
    setTimeout(async () => {
      const response = await fetch("/api/process-query", {
        method: "POST",
        body: JSON.stringify({ query }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      // Handle response here
      console.log(response);
    }, 500);
  };

  return <input type="text" onChange={handleChange} value={value} />;
};

export default SearchInput;
