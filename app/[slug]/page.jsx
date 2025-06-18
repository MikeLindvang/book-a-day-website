import { notFound } from 'next/navigation';
import dbConnect from '../../lib/dbConnect';
import Page from '../../lib/models/Page';
// Header intentionally removed for standalone sales pages
import Main from '../../components/Main';
import SalesPagePreview from '../../components/SalesPagePreview';

export const revalidate = 10;

export async function generateStaticParams() {
  await dbConnect();
  const pages = await Page.find({ published: true }).select('slug').lean();
  return pages.map((p) => ({ slug: p.slug }));
}

export default async function CMSPage({ params }) {
  const { slug } = params;
  await dbConnect();

  const pageDoc = await Page.findOne({ slug }).lean();
  if (!pageDoc || !pageDoc.published) {
    notFound();
  }

  return (
    <Main>
        <SalesPagePreview
          title={pageDoc.title}
          description={pageDoc.description}
          heroImage={pageDoc.heroImage}
          blocks={pageDoc.blocks}
          published={pageDoc.published}
        />
      </Main>
  );
}