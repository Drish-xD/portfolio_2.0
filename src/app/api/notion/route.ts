import { Client } from '@notionhq/client';
import { Properties } from '@types';
import { NextResponse } from 'next/server';

const NOTION_SECRET = process.env.NEXT_PUBLIC_NOTION_SECRET;
const DB_ID = process.env.NEXT_PUBLIC_NOTION_DB_ID;

const notion = new Client({ auth: NOTION_SECRET });

export async function GET() {
  if (!NOTION_SECRET || !DB_ID) throw new Error('Missing Notion Credentials');

  const query = await notion.databases.query({
    database_id: DB_ID,
    filter: {
      property: 'publish',
      checkbox: {
        equals: true
      }
    }
  });

  // @ts-ignore
  const rows: Properties[] = query.results.map((res) => res.properties);

  const structuredRows = rows.map(({ img, name, slug, tags }, index) => ({
    slug: slug.rich_text[0].text.content,
    img: img.files[0].file.url,
    name: name.title[0].text.content,
    tags: tags.multi_select.map((tag) => tag.name),
    id: index
  }));

  return NextResponse.json(structuredRows);
}
