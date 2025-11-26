"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RCC() {
  const [count, setCount] = useState(0);
  const router = useRouter();
  console.log("Client Component");
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => router.push("/about")}>About</button>
    </div>
  );
}
