import React from 'react';
import AboutMe from '../components/AboutMe';
import Connect from '../components/Connect';
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
      <Connect />
    </div>
  );
}
