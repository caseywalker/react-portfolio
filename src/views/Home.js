import React from 'react';
import AboutMe from '../components/AboutMe';
import Intro from '../components/Intro';
import Projects from '../components/Projects';
import Technologies from '../components/Technologies';

export default function Home() {
  return (
    <div>
      <Intro />
      <AboutMe />
      <Technologies />
      <Projects />
    </div>
  );
}
