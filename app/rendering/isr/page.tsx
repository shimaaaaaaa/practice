import Image from "next/image";
export const revalidate = 60; //60秒後に再生成

export default async function ISR() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random", {
    next: {
      revalidate: 60, //60秒後に再生成
    },
  }); //ビルド時に実行
  const data = await res.json();
  const timestamp = new Date().toISOString();
  return (
    <div>
      <p>Timestamp: {timestamp}</p>
      <Image src={data.message} alt="dog" width={400} height={400} />
    </div>
  );
}
