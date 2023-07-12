import ReactMarkdown from 'react-markdown';

const fetchProject = async (slug: string) => {
  const notion = await import('@api/notion/[id]/route');
  return await (await notion.GET(slug)).json();
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
