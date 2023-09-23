import React from "react";

type PageContentContainerProps = {
  ProjectBanner: React.ReactNode;
  ProjectContent: React.ReactNode;
};

const PageContentContainer: React.FC<PageContentContainerProps> = ({ ProjectBanner, ProjectContent }) => {
  return (
    <div className="w-full px-20 max-w-6xl">
      {ProjectBanner}
      {ProjectContent}
    </div>
  );
};

export default PageContentContainer;