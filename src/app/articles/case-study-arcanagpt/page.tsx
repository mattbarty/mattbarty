import { ArticleLayout } from '@/components/ArticleLayout';
import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import PersonaA from './persona-a.jpg';
import PersonaB from './persona-b.jpg';
import PersonaC from './persona-c.jpg';

export const article = {
  author: 'Matthew Barty',
  date: '2023-10-10',
  title: 'ArcanaGPT - UX case study',
  description:
    'Describing the UX design workflow of ArcanaGPT - An AI-powered Tarot reader.',
  slug: 'case-study-arcanagpt',
};

export const metadata = {
  title: article.title,
  description: article.description,
};

const personaData = [
  {
    "name": "Mia",
    "archetype": "New & Curious",
    "age": "20",
    "description": "Recent college graduate intrigued by tarot. Seeks an intuitive, beginner-friendly platform for personal growth.",
    "quote": "I've always been curious about tarot, but where do I even start without feeling lost?",
    "image": PersonaA,
    "goals": [
      "Wants to learn tarot without getting overwhelmed.",
      "Seeks a beginner-friendly platform.",
      "Wants to use tarot for personal growth and introspection."
    ],
    "painPoints": [
      "Feels overwhelmed by vast information.",
      "Worried about online resources' accuracy.",
      "Needs an accessible, step-by-step introduction."
    ],
    "arcanaGpthelps": [
      "Offers an intuitive interface that doesn’t intimidate.",
      "Provides concise and accurate readings.",
      "Allows progressive learning and practice."
    ]
  },
  {
    "name": "Jake",
    "archetype": "Reactive User",
    "age": "31",
    "description": "Tech worker familiar with tarot, seeking immediate insights during emotional distress.",
    "quote": "Life's thrown me a curveball. I just need something to help me make sense of it all.",
    "image": PersonaB,
    "goals": ["Needs quick and meaningful readings.", "Wants insights for emotional navigation.", "Prefers a responsive, immediate tool."],
    "painPoints": ["Doesn't want long readings.", "Wants resonating readings.", "Needs an immediate responsive tool."],
    "arcanaGpthelps": ["Delivers instant, tailored readings.", "Offers depth and nuance.", "Acts as an immediate reflection source."]
  },
  {
    "name": "Lorraine",
    "archetype": "Seasoned Reader",
    "age": "52",
    "description": "A librarian and tarot enthusiast for decades. Seeks depth and detailed interpretations for self-reflection.",
    "quote": "Over the years, tarot has been my anchor. I'm always seeking new depths and perspectives to my understanding.",
    "image": PersonaC,
    "goals": ["Enhance tarot reading skills.", "Use ArcanaGPT as a companion.", "Seeks detailed interpretations."],
    "painPoints": ["Avoids generic readings.", "Seeks a complementing tool.", "Needs a platform respecting traditional nuances."],
    "arcanaGpthelps": ["Provides in-depth analysis.", "Offers alternative perspectives.", "Allows deep reflection on meanings."]
  }
];


function ArcanagptBackgroundAsset(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg width="428" height="528" viewBox="0 0 428 528" fill="none" xmlns="http://www.w3.org/2000/svg"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <g opacity="0.25">
        <g clip-path="url(#clip0_176_2305)">
          <path d="M194.48 130.027C205.199 128.65 216.091 128.615 226.827 129.87C237.563 131.124 248.194 133.582 258.32 137.451C278.624 145.049 297.045 157.701 311.458 173.979C318.674 182.1 324.965 191.092 329.984 200.747C335.056 210.385 338.995 220.632 341.522 231.245C346.716 252.437 346.698 274.918 341.365 296.145C341.138 297.069 340.197 297.626 339.291 297.4C338.367 297.173 337.81 296.232 338.036 295.326V295.309C343.509 274.692 343.822 252.698 339.012 231.855C336.659 221.416 332.93 211.291 328.067 201.741C323.257 192.155 317.175 183.233 310.151 175.111C296.139 158.852 278.066 146.06 258.006 138.252C248.002 134.279 237.441 131.7 226.757 130.288C216.056 128.894 205.199 128.789 194.463 130.009L194.48 130.027Z" fill="#EAE9E6" />
          <path d="M335.247 294.35C334.62 296.807 336.101 299.3 338.559 299.927C341.016 300.554 343.508 299.073 344.136 296.616C344.763 294.159 343.282 291.666 340.824 291.039C338.367 290.412 335.875 291.893 335.247 294.35Z" fill="#EAE9E6" />
          <path d="M290.771 368.94C283.939 374.098 276.62 378.629 268.934 382.429C261.248 386.228 253.179 389.225 244.9 391.473C228.343 396.005 210.898 397.12 193.836 395.098C176.773 393.059 160.112 387.657 145.072 379.292C130.031 370.944 116.611 359.633 105.771 346.232C94.9307 332.83 86.6872 317.32 81.7027 300.781C76.7357 284.26 74.9057 266.745 76.5614 249.544C78.1474 232.343 82.9575 215.369 91.0094 200.015C98.9915 184.644 109.936 170.807 123.077 159.479C123.792 158.852 124.89 158.939 125.517 159.653C126.145 160.368 126.057 161.466 125.343 162.093C112.446 173.038 101.641 186.439 93.7107 201.409C85.7112 216.345 80.8661 232.918 79.1582 249.788C77.3979 266.658 79.0362 283.894 83.8115 300.188C88.5868 316.5 96.5689 331.854 107.165 345.169C117.744 358.501 130.92 369.776 145.751 378.176C160.565 386.594 177.052 392.083 193.993 394.244C210.915 396.388 228.291 395.429 244.831 391.055C253.091 388.877 261.178 385.949 268.881 382.219C276.585 378.49 283.922 374.029 290.806 368.922L290.771 368.94Z" fill="#EAE9E6" />
          <path d="M127.016 164.481C128.95 162.843 129.194 159.95 127.573 158.015C125.935 156.081 123.042 155.837 121.108 157.458C119.173 159.096 118.929 161.989 120.55 163.923C122.188 165.858 125.081 166.102 127.016 164.481Z" fill="#EAE9E6" />
        </g>
        <g clip-path="url(#clip1_176_2305)">
          <path d="M257.03 66.5552C279.878 71.9403 301.733 81.4557 321.287 94.474C340.842 107.475 358.148 123.926 372.003 142.922C385.876 161.901 396.385 183.354 402.816 206.01C409.265 228.648 411.635 252.454 409.805 275.946C408.045 299.438 402.084 322.634 392.238 344.07C382.425 365.523 368.692 385.182 351.996 401.894C335.317 418.607 315.676 432.375 294.204 442.309C272.75 452.26 249.518 458.325 225.92 460.207C224.962 460.276 224.143 459.579 224.056 458.621C223.986 457.662 224.683 456.843 225.642 456.756C248.838 455.048 271.739 449.227 292.932 439.555C314.124 429.918 333.592 416.464 350.149 400.065C366.723 383.665 380.421 364.338 390.251 343.181C400.115 322.042 406.163 299.107 408.062 275.824C410.014 252.541 407.801 228.909 401.544 206.376C395.287 183.842 384.97 162.441 371.271 143.445C357.59 124.449 340.441 107.945 321.009 94.8574C301.576 81.7519 279.808 72.1145 256.995 66.5726L257.03 66.5552Z" fill="#EAE9E6" />
          <path d="M225.676 453.811C223.149 454.002 221.267 456.216 221.459 458.743C221.65 461.27 223.864 463.152 226.391 462.96C228.918 462.768 230.8 460.555 230.609 458.028C230.417 455.501 228.203 453.619 225.676 453.811Z" fill="#EAE9E6" />
          <path d="M16.3468 302.976C13.5931 290.794 12.0071 278.351 11.5714 265.873C11.2229 253.378 11.8851 240.847 13.7848 228.491C17.5144 203.744 26.1414 179.764 38.7943 158.119C51.5168 136.526 68.2653 117.252 88.0637 101.776C107.775 86.1785 130.571 74.5544 154.692 67.3046C155.598 67.0258 156.557 67.5486 156.835 68.4548C157.114 69.361 156.591 70.3196 155.685 70.5984H155.668C131.896 77.4474 109.309 88.6358 89.6671 103.815C69.9384 118.855 53.1551 137.729 40.2931 158.991C27.5182 180.304 18.6647 204.023 14.6562 228.613C12.6346 240.9 11.8154 253.378 12.0246 265.856C12.3034 278.316 13.75 290.76 16.3642 302.976H16.3468Z" fill="#EAE9E6" />
          <path d="M156.225 73.4738C158.665 72.7767 160.059 70.2323 159.362 67.7925C158.665 65.3526 156.121 63.9584 153.681 64.6555C151.241 65.3526 149.847 67.897 150.544 70.3369C151.241 72.7767 153.785 74.1709 156.225 73.4738Z" fill="#EAE9E6" />
          <path d="M196.485 458.517C168.181 456.809 140.192 448.949 115.06 435.53C89.9113 422.145 67.6381 403.289 50.2274 380.598C49.6522 379.849 49.7917 378.786 50.5411 378.211C51.2905 377.636 52.3536 377.775 52.9287 378.524C52.9287 378.524 52.9287 378.542 52.9462 378.559C69.6249 401.198 91.2185 420.281 115.879 434.031C140.523 447.833 168.216 456.234 196.485 458.517Z" fill="#EAE9E6" />
          <path d="M55.4386 376.956C53.9049 374.934 51.0292 374.551 49.0076 376.084C46.9859 377.618 46.6025 380.494 48.1361 382.515C49.6698 384.537 52.5455 384.92 54.5671 383.386C56.5888 381.853 56.9722 378.977 55.4386 376.956Z" fill="#EAE9E6" />
        </g>
        <g clip-path="url(#clip2_176_2305)">
          <path d="M471.484 236.177C474.325 262.231 473.087 288.686 468.242 314.426C465.663 327.27 462.421 340.01 457.977 352.348C453.515 364.67 448.322 376.747 442.135 388.319C417.544 434.711 378.574 473.295 332.041 497.728C320.469 503.95 308.304 509.056 295.912 513.396C292.793 514.424 289.725 515.609 286.553 516.48L277.072 519.199C273.9 520.053 270.676 520.733 267.487 521.499C265.883 521.865 264.298 522.266 262.677 522.597L257.832 523.486C254.59 524.026 251.383 524.758 248.107 525.142L238.33 526.414C235.07 526.815 231.777 526.972 228.5 527.25L223.585 527.634L218.653 527.773C205.512 528.366 192.319 527.738 179.248 526.257C153.071 523.416 127.399 516.358 103.244 505.85C79.0882 495.306 56.6407 480.981 36.5983 463.849C35.8663 463.222 35.7792 462.141 36.4066 461.41C37.034 460.678 38.1145 460.59 38.8465 461.218C58.5404 478.227 80.6219 492.5 104.446 503.061C128.253 513.57 153.629 520.698 179.527 523.66C192.459 525.177 205.53 525.891 218.549 525.368L223.428 525.264L228.308 524.898C231.55 524.636 234.809 524.497 238.051 524.113L247.758 522.911C251 522.562 254.189 521.848 257.413 521.325L262.224 520.471C263.827 520.157 265.413 519.757 266.999 519.408C270.171 518.659 273.378 518.014 276.515 517.177L285.926 514.528C289.08 513.674 292.13 512.507 295.233 511.513C307.554 507.279 319.667 502.277 331.187 496.142C377.546 472.127 416.55 433.961 441.316 387.866C447.537 376.363 452.783 364.356 457.297 352.087C461.811 339.801 465.105 327.113 467.754 314.304C472.739 288.616 474.115 262.196 471.431 236.142L471.484 236.177Z" fill="#EAE9E6" />
          <path d="M40.9383 459.196C39.0212 457.54 36.1107 457.767 34.4725 459.684C32.8168 461.601 33.0433 464.511 34.9604 466.15C36.8775 467.805 39.788 467.579 41.4263 465.662C43.082 463.745 42.8554 460.834 40.9383 459.196Z" fill="#EAE9E6" />
          <path d="M-53.0005 263.852C-53.1051 232.883 -47.6152 201.914 -36.9666 172.811C-26.3179 143.707 -10.4409 116.537 9.65384 92.9056C29.7311 69.274 53.9911 49.1801 81.0222 33.9136C108.018 18.5775 137.821 8.20812 168.494 3.32843C199.168 -1.55126 230.713 -1.09815 261.23 4.80976C291.781 10.6305 321.183 22.2372 347.778 38.3576C374.408 54.478 397.989 75.513 417.438 99.8243C436.819 124.205 451.842 152.037 461.654 181.629C461.95 182.535 461.462 183.511 460.556 183.825C459.65 184.121 458.674 183.633 458.36 182.727C448.827 153.466 434.117 125.913 415.068 101.724C395.95 77.6043 372.7 56.6913 346.419 40.5884C320.154 24.5028 291.084 12.8787 260.811 6.95334C230.556 0.940863 199.255 0.348329 168.756 5.05375C138.256 9.75916 108.576 19.9368 81.6497 35.0638C54.6883 50.1386 30.4282 70.0233 10.2987 93.4981C-9.83088 116.956 -25.8125 143.986 -36.5657 172.985C-47.3189 201.967 -52.9656 232.883 -53.0005 263.852Z" fill="#EAE9E6" />
          <path d="M55.0551 195.188L56.6572 211.013L72.4833 212.615L56.6572 214.217L55.0551 230.042L53.4531 214.217L37.627 212.615L53.4531 211.013L55.0551 195.188Z" fill="#EAE9E6" />
          <path d="M426.275 353.777L427.877 369.603L443.703 371.205L427.877 372.807L426.275 388.632L424.673 372.807L408.847 371.205L424.673 369.603L426.275 353.777Z" fill="#EAE9E6" />
          <path d="M400.133 43.5688L401.735 59.3943L417.561 60.9963L401.735 62.5983L400.133 78.4238L398.531 62.5983L382.705 60.9963L398.531 59.3943L400.133 43.5688Z" fill="#EAE9E6" />
          <path d="M82.9399 458.342L84.542 474.168L100.368 475.77L84.542 477.372L82.9399 493.197L81.3378 477.372L65.5117 475.77L81.3378 474.168L82.9399 458.342Z" fill="#EAE9E6" />
          <path d="M34.1411 0L35.7431 15.8255L51.5693 17.4275L35.7431 19.0295L34.1411 34.8549L32.539 19.0295L16.7129 17.4275L32.539 15.8255L34.1411 0Z" fill="#EAE9E6" />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_176_2305">
          <rect width="269.422" height="267.111" fill="white" transform="translate(75.9688 128.963)" />
        </clipPath>
        <clipPath id="clip1_176_2305">
          <rect width="398.914" height="398.479" fill="white" transform="translate(11.4844 64.4814)" />
        </clipPath>
        <clipPath id="clip2_176_2305">
          <rect width="526" height="528" fill="white" transform="translate(-53)" />
        </clipPath>
      </defs>
    </svg>
  );
}

function FigmaIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      fill="none"
      viewBox="0 0 30 30"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M10 29L10 29c-2.209 0-4-1.791-4-4l0 0c0-2.209 1.791-4 4-4h2.857C13.488 21 14 21.512 14 22.143V25C14 27.209 12.209 29 10 29zM20 9h-2.857C16.512 9 16 8.488 16 7.857V2.143C16 1.512 16.512 1 17.143 1H20c2.209 0 4 1.791 4 4l0 0C24 7.209 22.209 9 20 9zM10 1h2.857C13.488 1 14 1.512 14 2.143v5.714C14 8.488 13.488 9 12.857 9H10C7.791 9 6 7.209 6 5l0 0C6 2.791 7.791 1 10 1zM10 11h2.857C13.488 11 14 11.512 14 12.143v5.714C14 18.488 13.488 19 12.857 19H10c-2.209 0-4-1.791-4-4l0 0C6 12.791 7.791 11 10 11zM20 11A4 4 0 1020 19 4 4 0 1020 11z"></path>
    </svg>
  );
}

function Divider({ title }: { title: string; }) {
  return (
    <div className="relative my-20 lg:my-24">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-zinc-600 dark:border-zinc-400"></div>
      </div>
      <div className="relative flex justify-start">
        <span className="bg-white dark:bg-zinc-900 pr-3 text-xl font-semibold leading-6 text-zinc-600 dark:text-zinc-400">{title}</span>
      </div>
    </div>
  );
}

const VideoAutoplay = ({ src, className, ...props }: { src: string; className: string; }) => {
  return (
    <video
      className={clsx(className, 'w-full h-full object-cover')}
      loop
      autoPlay
      muted
      playsInline
      style={{ width: "100%", height: "100%" }}
      {...props}>
      <source src={src} type="video/mp4" />
    </video>
  );
};


interface PersonaProps {
  name: string;
  archetype: string;
  description: string;
  age: string;
  quote: string;
  image: StaticImageData;
  goals: string[];
  painPoints: string[];
}

const PersonaCard: React.FC<PersonaProps> = ({ name, archetype, description, age, quote, image, goals, painPoints }) => {
  return (
    <div className="my-6 card shadow-md rounded-lg p-2 md:p-6 border border-slate-600 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className=''>
        <Image src={image} alt='Persona A - Mia' className='md:w-[300px] aspect-square rounded-lg mb-4 ' />
        <div>
          <div className="text-4xl font-bold dark:text-white my-2">{name}</div>
          <div>{age} yo. || {archetype}</div>
          <div className="my-4">{description}</div>
        </div>
      </div>
      <div className='flex flex-col h-full justify-between'>
        <div className='font-semibold dark:text-white border-t border-b p-4'>"{quote}"</div>
        <div className="persona-section my-4">
          <div className="text-lg font-semibold mb-2 pt-4">| Goals</div>
          <ul>
            {goals.map((goal, idx) => (
              <li key={idx} className="my-2">{goal}</li>
            ))}
          </ul>
        </div>

        <div className="persona-section my-4">
          <div className="text-lg font-semibold mb-2">| Pain Points</div>
          <ul>
            {painPoints.map((point, idx) => (
              <li key={idx} className="my-2">{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};



export default function articleBody() {
  return (
    <>
      <ArticleLayout article={article}>
        <div className='flex flex-col lg:flex-row w-full h-auto justify-between relative bg-black rounded-xl overflow-clip'>
          <div className='relative flex flex-col justify-center w-auto mx-2 my-2 md:mx-6 items'>
            <div className='absolute top-0 left-0 md:-inset-x-[35%] z-10'>
              <ArcanagptBackgroundAsset className='h-[300px] lg:h-auto  absolute mb-8 animate-slow-spin duration-1000' />
            </div>
            <div className='z-20'>
              <h1 className='mt-8 md:mt-2 text-2xl md:text-4xl font-bold text-slate-100'>Your Personal AI-Powered Tarot Reader 🔮</h1>
              <p className='text-sm md:text-base mt-2 mb-0 text-slate-400'>
                Introducing ArcanaGPT, a webapp that uses contemporary AI to deliver instant, tailored Tarot readings.
              </p>
              <p className='text-sm md:text-base mt-2 text-slate-400'>
                By bridging the traditional mystique of Tarot with cutting-edge technology and UX design,
                ArcanaGPT promises an experience that is both personal and in tune with modern-day needs.
              </p>
              <div className='flex w-full justify-center items-center md:block'>
                <a
                  href='https://www.figma.com/proto/PJPSyobvDnfkinWS8UFOoE/ArcanaGPT?page-id=0%3A1&type=design&node-id=103-602&viewport=1867%2C1699%2C0.15&t=QkEvDFlDgK7A2edI-1&scaling=scale-down&starting-point-node-id=103%3A602&mode=design'
                  target='_blank'
                  className='bg-[#00A67E] hover:bg-[#49b99f] w-fit text-slate-100 py-2 px-4 rounded-md flex items-center mb-8'>
                  <FigmaIcon className='fill-slate-100 w-6 h-6 mr-2' />
                  <div>
                    See demo
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className='relative h-[300px] md:h-[600px] min-w-[150px] md:min-w-[450px] overflow-clip'>
            <div className='absolute w-full h-full bg-gradient-to-r from-black -inset-x-10 md:-inset-x-2'></div>
            <VideoAutoplay className='-z-1 bg-black min-h-[350px]' src={'/videos/arcanagpt-demo.mp4'} />
          </div>
        </div>
        <Divider title='Project Summary' />
        <h1 className='text-xl dark:text-slate-100 font-bold'>Context</h1>
        <p>Tarot reading, with its rich history and mystique, has long been a tool for introspection. Typically done by a trained reader,
          it involves drawing cards from a deck and interpreting their meanings in the context of a question or situation - In my personal life,
          I've found it a convenient and fun prompt for self-reflection.
        </p>
        <p>
          However, I've also found that the experience of getting a reading can be quite inaccessible, especially for those who are new to the practice -
          And it typically required a lot of time and mental charge to be both the reader and the querent.
        </p>
        <p>
          Services exist that offer automated readings, but they are often generic and impersonal, and lack the nuance and depth of a human reader.
          Therefore, I decided to create ArcanaGPT, a webapp that uses contemporary AI to deliver instant, tailored Tarot readings using cutting edge
          LLM technology.
        </p>
        <h1 className='text-xl dark:text-slate-100 font-bold'>Problem Statement</h1>
        <ul>
          <li>🧙‍♀️ Traditional tarot reading requires a trained interpreter and can be inaccessible to newcomers.</li>
          <li>😵‍💫 Acting as both reader and querent is mentally taxing.</li>
          <li>💤 Automated tarot services are generic and lack the depth and nuance of human readers.</li>
          <li>🤖 There's a gap for a solution that blends automation convenience with human-like depth.</li>
        </ul>
        <h1 className='text-xl dark:text-slate-100 font-bold'>Solution</h1>
        <p>
          Introducing <strong>ArcanaGPT</strong> - Bridging Tradition with Modern Technology - a revolutionary
          digital platform designed to make tarot reading accessible, convenient, and insightful.
          Our aim is to merge the age-old wisdom of traditional tarot reading with the power of contemporary AI.
        </p>
        <ul>
          <li>🃏 <strong>Intuitive and User-Friendly</strong>: Gone are the days of needing extensive training to understand tarot. ArcanaGPT offers a user-friendly interface, ideal for both newcomers and seasoned practitioners.</li>
          <li>🤯 <strong>Mental Ease</strong>: With ArcanaGPT, you no longer have to juggle the roles of reader and querent. Get readings without the mental strain, freeing you to focus on introspection and self-reflection.</li>
          <li>🤖💬 <strong>Depth and Nuance</strong>: While automation is at its core, ArcanaGPT is not just another generic tarot bot. Powered by cutting-edge LLM technology, it delivers readings that are personalized, deep, and nuanced, rivaling the insights of human readers.</li>
          <li>⚙️❤️ <strong>Blend of Tradition and Technology</strong>: At the heart of ArcanaGPT is a unique blend of automation convenience with the warmth, depth, and sensitivity of human-like interpretation. It's the best of both worlds, ensuring you get the most out of your tarot experience.</li>
        </ul>
        <Divider title='Discovery' />
        <h1 className='text-xl dark:text-slate-100 font-bold'>Landscaping</h1>
        <h1 className='text-xl dark:text-slate-100 font-bold'>Personas</h1>
        <div className='flex flex-col w-full justify-around'>
          <div className="container mx-auto flex flex-wrap justify-center">
            {personaData.map((persona, idx) => (
              <PersonaCard key={idx} {...persona} />
            ))}
          </div>
        </div>
        <h1 className='text-xl dark:text-slate-100 font-bold'>Task Analysis</h1>
        <Divider title='Ideation' />
        <h1 className='text-xl dark:text-slate-100 font-bold'>Paper sketch</h1>
        <h1 className='text-xl dark:text-slate-100 font-bold'>WireFraming</h1>
        <Divider title='Design' />
      </ArticleLayout>
    </>
  );
};;