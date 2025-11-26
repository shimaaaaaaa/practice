import Image from "next/image";
export const dynamic = "force-dynamic"; //SSRを強制する

export default async function SSR() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random", {
    cache: "no-store", //fetch APIのキャッシュを無効にする
  });
  const data = await res.json();
  const timestamp = new Date().toISOString();

  return (
    <div>
      <p>Timestamp: {timestamp}</p>
      <Image src={data.message} alt="dog" width={400} height={400} />
    </div>
  );
}
