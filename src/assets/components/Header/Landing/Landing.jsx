import React, { lazy, useState } from "react";
const LazyHero = React.lazy(() => import("../Hero/Hero"));
const LazySkillset = React.lazy(() => import("../../Skill/Skillset"));
const LazyProject = React.lazy(() => import("../../Projects/project"));

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

function Landing() {
  return (
    <>
      <FadeInSection>
        <LazyHero />
      </FadeInSection>
      <FadeInSection>
        <LazySkillset />
      </FadeInSection>
      <FadeInSection>
        <LazyProject />
      </FadeInSection>
    </>
  );
}

export default Landing;
