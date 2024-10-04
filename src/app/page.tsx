'use client';
// import Image from "next/image";

import TestComponent from "@/components/TestComponent";
import { useState, useEffect } from 'react'

export default function Home() {
  // const x: number = 1;

  const [ counter, setCounter ] = useState(0);

  return (
    <body>
      <button onClick={() => setCounter(counter + 1)}>Click me!</button>
      <h1>Counter: {counter}</h1>
    </body>
    
  );
}