import Image from "next/image";

export default async function SSG() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random"); //ビルド時に実行
  const data = await res.json();
  const timestamp = new Date().toISOString();
  return (
    <div>
      <p>Timestamp: {timestamp}</p>
      <Image src={data.message} alt="dog" width={400} height={400} />
    </div>
  );
}
