import ClientComponent from "../components/ClientComponent";
import Link from "next/link";

export default function RSC() {
  console.log("Server Component");
  return (
    <div>
      <ClientComponent />
      <Link href="/about">About</Link>
    </div>
  );
}
