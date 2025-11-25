import type { Metadata } from "next";

//export const metadata: Metadata = {
//  title: "Blog Post",
//  description: "Blog Post",
//};

type Params = {
  params: Promise<{ id: string }>;
};

//ダミーデータ
const Articles = [
  { id: "1", title: "Articles 1" },
  { id: "2", title: "Articles 2" },
  { id: "3", title: "Articles 3" },
];

export async function generateMetadata(props: Params) {
  const params = await props.params;
  const { id } = params;
  return {
    title: `Blog Post ${id}`,
    description: `Blog Post ${id}`,
  };
}

async function fetchArticle(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  //throw new Error("Error fetching article");
  return Articles.find((article) => article.id === id);
}

export default async function BlogPost(props: Params) {
  const params = await props.params;
  const { id } = params;
  const article = await fetchArticle(id);
  return (
    <div>
      <ul>
        <li>title: {article?.title}</li>
      </ul>
    </div>
  );
}
