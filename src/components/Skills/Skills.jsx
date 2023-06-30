import { BsPatchCheckFill } from "react-icons/bs";

import "./Skills.css";

const Skills = () => {
  return (
    <section id="Skills">
      <h2>My Abilities</h2>
      <div className="container experience_container">
        <div className="box">
          <h3>PROGRAMMING</h3>
          <div className="content">
            <article className="details">
              <BsPatchCheckFill className="icons" />
              <h4>JavaScript</h4>
            </article>
            <article className="details">
              <BsPatchCheckFill className="icons" />
              <h4>Python</h4>
            </article>
            <article className="details">
              <BsPatchCheckFill className="icons" />
              <h4>C++</h4>
            </article>
          </div>
        </div>
        {/* END */}
        <div className="box">
          <h3>FRONT END</h3>
          <div className="content">
            <article className="details">
              <BsPatchCheckFill className="icons" />
              <h4>Modern HTML</h4>
            </article>
            <article className="details">
              <BsPatchCheckFill className="icons" />
              <h4>CSS</h4>
            </article>
            <article className="details">
              <BsPatchCheckFill className="icons" />
              <h4>JSX</h4>
            </article>
          </div>
        </div>
        {/* END */}
        <div className="box">
          <h3>DATABASES</h3>
          <div className="content">
            <article className="details">
              <BsPatchCheckFill className="icons" />
              <h4>MySQL</h4>
            </article>
            <article className="details">
              <BsPatchCheckFill className="icons" />
              <h4>MongoDB</h4>
            </article>
          </div>
        </div>
        {/* END */}
        <div className="box">
          <h3>OTHER</h3>
          <div className="content">
            <article className="details">
              <BsPatchCheckFill className="icons" />
              <h4>Git</h4>
            </article>
            <article className="details">
              <BsPatchCheckFill className="icons" />
              <h4>GitHub</h4>
            </article>
          </div>
        </div>
        {/* END */}
      </div>
    </section>
  );
};
export default Skills;
