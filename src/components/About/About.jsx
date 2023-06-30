import info from "../../assets/sanketpol1.png";
import "./About.css";

const About = () => {
  return (
    <section id="About">
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="image">
          <img src={info} alt="AboutMe" loading="lazy" />
        </div>
        <div className="paragraph">
          <p>
            A Tech Enthusiast. I like programming and web developement. I
            started learning React in Oct 2022 to experiment and develop React
            Apps professionally. I'm very passionate about this ecosystem
            because it drives me to be curious and resourceful.
          </p>
          <p>
            I taught myself how to do this so that I may acquire the ability to
            improve the quality of websites and to bring new ideas to life.
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;
