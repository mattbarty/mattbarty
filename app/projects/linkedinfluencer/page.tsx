import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ProjectContentContainer from "@/app/components/ProjectContentContainer";
import ProjectBanner from "@/app/components/ProjectBanner";
import ProjectContent from "@/app/projects/linkedinfluencer/components/ProjectContent";

type PageContentContainerProps = {
  ProjectBanner: React.FC<{}>;
  ProjectContent: React.FC<{}>;
};


export default function Home() {
  return (
    <main className="w-full flex flex-col items-center">
      <Navbar />
      <div className="w-full h-40 bg-gray-400"></div>
      <ProjectContentContainer
        ProjectBanner={<ProjectBanner />}
        ProjectContent={<ProjectContent />} />
      <Footer />
    </main>
  );
}