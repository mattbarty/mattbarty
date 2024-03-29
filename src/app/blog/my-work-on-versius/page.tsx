import { ArticleLayout } from '@/components/ArticleLayout';
import Image from 'next/image';

export const article = {
  author: 'Matthew Barty',
  date: '2023-10-01',
  title: 'My Work on Versius',
  description:
    'Describing my work as a Human Factors Engineer and Clinical Data Scientist at CMR Surgical, developing the Versius surgical robotic system.',
  slug: 'my-work-on-versius',
};

export const metadata = {
  title: article.title,
  description: article.description,
};

function Divider({ title }: { title: string; }) {
  return (
    <div className="relative my-20 lg:my-24">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t  border-zinc-400"></div>
      </div>
      <div className="relative flex justify-start">
        <span className=" bg-zinc-900 pr-3 text-xl font-semibold leading-6  text-zinc-400">{title}</span>
      </div>
    </div>
  );
}

export default function articleBody() {
  return (
    <>
      <ArticleLayout article={article}>
        <p>
          From 2018 to 2022, I served as a <b>Human Factors Engineer</b> then <b>Clinical Data Scientist </b> at <a href='https://cmrsurgical.com/' target='_blank'>CMR Surgical</a>,
          and contributed to the development of the world&apos;s next-generation surgical robotic system, <a href='https://www.youtube.com/watch?v=a9mXmmhMKqY' target='_blank'>Versius</a>.
        </p>
        <div className='relative w-full pb-[56.25%] rounded-lg overflow-clip'>
          <iframe
            src="https://www.youtube.com/embed/6mhu4E_cZ5Q"
            title="Versius Surgical Robotic System | Transforming Surgery. For Good."
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className='absolute top-0 left-0 w-full h-full'
          ></iframe>
        </div>
        <div>
          CMR&apos;s mission is to: "Tranform surgery, for good" - By democratising the benefits of laparoscopic surgery through robotics.
          To reflect this, Versius is designed to be to be portable, modular, cost-effective, and intuitive.
        </div>
        <div>
          <Divider title='Human Factors Engineering' />
          <Image
            src='https://dixog9cdtdsmc.cloudfront.net/case-study-versius/versius-study-team.jpg'
            alt="Usability study scene featuring Versius"
            className='rounded-lg lg:px-24'
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: '100%' }}
          />
          <p>
            As a Human Factors Engineer, my job was to ensure that Versius was safe and effective for use. That meant having intimate knowledge
            of the entire surgical system, including its hardware (console, arms ("BSU"), instruments, etc.), software (GUIs), and the cultural,
            practical, and regulatory context in which it would be used.
          </p>
          <div>
            <p>
              My responsibilities as a Human Factors Engineer included:
            </p>
            <ul>
              <li>Usability risk management</li>
              <li>Curriculum development & validation for professional education</li>
              <li>Formative & summative usability testing</li>
              <li>Conducting clinical engineering studies (porcine & cadaveric)</li>
              <li>Supporting system verification activities (EMC, excelarated life testing, etc.)</li>
            </ul>
          </div>
        </div>
        <div>
          <Divider title='Clinical Data Science' />
          <Image
            src='https://dixog9cdtdsmc.cloudfront.net/case-study-versius/matt-using-versius.jpg'
            alt="Matthew Barty using the Versius surgical robotic system"
            className='rounded-lg lg:px-24'
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: '100%' }}
          />

          <p>
            Transitioning to Clinical Data Science, my focus shifted to the data-driven, real world evidence side of Versius.
            I analyzed data from surgical cases to discern patterns, visualize information, and provide insights that fine-tuned surgical procedures
            and supported product development.
          </p>

          <p>
            One of the key challenges was handling vast amounts of surgical data, ensuring its integrity, and interpreting it in a way that was meaningful for clinical applications.
            I worked cross-functionally with software engineers, clinicians, and the regulatory affairs team to process this data to drive product improvements.
          </p>

          <div>
            My responsibilities as a Clinical Data Scientist included:
          </div>

          <ul>
            <li>Standardizing the data collection process from surgeries,</li>
            <li>Applying statistical methods to affirm the Versius system&apos;s real-world effectiveness and safety,</li>
            <li>Producing reports for regulatory bodies, stakeholders, and customers highlighting Versius's safety and performance, and</li>
            <li>Partnering with diverse teams to embed data-driven insights into product development</li>
          </ul>

        </div>
        <div>
          <Divider title='On Reflection' />
          <Image
            src='https://dixog9cdtdsmc.cloudfront.net/case-study-versius/team-meal.jpg'
            alt="CMR Surgical Clinical Engineering team having lunch"
            className='rounded-lg lg:px-24'
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: '100%' }}
          />
          <p>
            I&apos;m grateful for my time at CMR, and am proud to have played my part in tranforming surgery, for good - In addition to having the
            privledge to have worked with some of the most fun, ambitious, and talented people I&apos;ve ever met!
            It in genuinely surreal to see Versius out in the world, changing the lives of patients, surgeons, and the wider surgical community - Just awesome !!
          </p>
          <p>
            CMR presented a unique platform where I honed my skills in human factors engineering and clinical data science.
            By integrating qualitative user-centered design with rigorous statistical analyses, I gained a comprehensive insight
            into both the user experience and the clinical aspects of Versius. This multifaceted approach was instrumental in ensuring
            that Versius met the surgical community's needs and elevated patient care.
          </p>
        </div>
      </ArticleLayout>
    </>
  );
};