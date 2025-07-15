import React from 'react';
import Summary from './sections/summary';
import Jobs from './sections/jobs';
import Skills from './sections/skills';

export default function Experience() {
  return (
    <div>
      <Summary />

      <Skills />

      <Jobs />
    </div>
  );
}
