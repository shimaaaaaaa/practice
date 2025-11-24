export default async function BlogPost(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const { id } = params;
  return <div>Blog Post {id}</div>;
}
