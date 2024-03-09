"use client";
import { getProcessedNlpQuery } from "@/app/services/nlp";
import React, { useState } from "react";

const SearchInput = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setValue(query);
    // Only call getQuery after 500ms of inactivity
    getProcessedNlpQuery(query);
  };
  return <input type="text" onChange={handleChange} value={value} />;
};

export default SearchInput;
