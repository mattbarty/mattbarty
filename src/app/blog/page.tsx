import { type Metadata } from 'next';

import { Card } from '@/components/Card';
import { CardTitle, CardDescription, CardCta, CardEyebrow } from '@/components/CardComponents';
import { SimpleLayout } from '@/components/SimpleLayout';
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles';
import { formatDate } from '@/lib/formatDate';

function Article({ article }: { article: ArticleWithSlug; }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <CardTitle href={`/blog/${article.slug}`}>
          {article.title}
        </CardTitle>
        <CardEyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </CardEyebrow>
        <CardDescription>{article.description}</CardDescription>
        <CardCta>Read article</CardCta>
      </Card>
      <CardEyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </CardEyebrow>
    </article>
  );
}

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order.',
};

export default async function ArticlesIndex() {
  let articles = await getAllArticles();

  return (
    <>
      <SimpleLayout
        title="Bloggy Bits"
        intro="(🚧👷🏽‍♂️ in development) - This is a new bit of my portfolio and is under construction! It will document some long-form thoughts on projects, life, and other bits."
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  );
}
