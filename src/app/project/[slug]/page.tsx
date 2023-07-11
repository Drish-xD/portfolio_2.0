import ReactMarkdown from 'react-markdown';

const fetchProject = async (slug: string) => {
  const res = await fetch(`http://localhost:3000/api/notion/${slug}`);
  const data = await res.json();
  return data;
};

export default async function Project({ params: { slug } }: { params: { slug: string } }) {
  const data = await fetchProject(slug);

  return (
    <main className="global-section">
      My Project: {slug}
      <ReactMarkdown>{data.parent}</ReactMarkdown>
    </main>
  );
}
