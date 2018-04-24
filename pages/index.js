import Head from 'next/head';
import profile from '../data/profile.json';
import experience from '../data/experience.json';
import projects from '../data/projects.json';
import Sidebar from '../components/sidebar';
import Summary from '../components/summary';
import Experience from '../components/experience';
import Projects from '../components/projects';
import Skills from '../components/skills';

export default () => (
  <div>
    <Head>
      <title>Cong Cuong Pham | congcuong.cse</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="wrapper">
      <Sidebar profile={profile} />
      <div className="main-wrapper">
        <Summary profile={profile} />
        <Experience positions={experience} />
        <Skills skills={profile.skills} />
        {/* <Projects projects={projects} /> */}
      </div>
    </div>
  </div>
);
