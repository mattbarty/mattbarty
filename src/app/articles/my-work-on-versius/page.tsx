import { ArticleLayout } from '@/components/ArticleLayout';
import Image from 'next/image';
import versius1 from './versius-1.jpeg';
import versiusSurgicalTeam from './versius-surgical-team.png';
import mattUsingVersius from './matt-using-versius.jpg';

export const article = {
  author: 'Matthew Barty',
  date: '2023-10-01',
  title: 'My Work on Versius',
  description:
    'When you’re building a website for a company as ambitious as Planetaria, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself.',
  slug: 'my-work-on-versius',
};

export const metadata = {
  title: article.title,
  description: article.description,
};

// export default (props) => <ArticleLayout article={article} {...props} />;

export default function articleBody() {
  return (
    <>
      <ArticleLayout article={article}>
        <div>
          Between 2018 to 2022 I worked at <a href='https://cmrsurgical.com/' target='_blank'>CMR Surgical</a> as a <b>Human Factors Engineer</b> then <b>Clinical Data Scientist</b>
          developing a next-generation surgical robotic system, <a href='https://www.youtube.com/watch?v=a9mXmmhMKqY' target='_blank'>Versius</a>. CMRs mission is to - Transforming surgery, for good. -
          by making laparopscopy surgery safer and more accessible for all. To reflect this, Versius is designed to be to be portable, modular, and cost-effective.
        </div>

      </ArticleLayout>
    </>
  );
};



// // Video

// During my time at CMR I worked on

// 1. Imaging system

// ## Human Factors Engineering

// <Image src={mattUsingVersius} alt="" />

// ## Clinical Data Science

// <Image src={versiusSurgicalTeam} alt="" />