import React from "react";
import Header from "./components/common/Header/Header";
import MainPage from "./components/pages/MainPage/MainPage";
import ProjectPage from "./components/pages/ProjectPage/ProjectPage";
import ServicePage from "./components/pages/ServicePage/ServicePage";
import WorkPage from "./components/pages/WorkPage/WorkPage";

const App = () => {
  return (
    <>
      <Header />
      <MainPage />
      <WorkPage />
      <ProjectPage />
      {/* <ServicePage/> */}
    </>
  );
};

export default App;
