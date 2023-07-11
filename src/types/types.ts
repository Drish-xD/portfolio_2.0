export interface Properties {
  slug: { id: string; rich_text: { text: { content: string } }[] };
  img: { id: string; files: { name: string; file: { url: string } }[] };
  name: { id: string; title: { text: { content: string } }[] };
  tags: { id: string; multi_select: { id: string; name: string }[] };
}
