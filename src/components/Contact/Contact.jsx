import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";
import { ImBlog } from "react-icons/im";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="Contact">
      <h2>Reach Out</h2>
      <div className="container contact_content">
        <p>
          I am seeking for an entry-level/ full-time opportunity where I can put
          my abilities to work and to grow my skills in being a Front-End
          Developer/Full-Stack Developer and to put my skills to use.
        </p>
        <p>I would love to collaborate and contribute. Feel free to connect!</p>

        <div className="handles">
          <a
            href="https://www.linkedin.com/in/sanketp18/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/sanketmp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub />
          </a>
          <a
            href="https://twitter.com/sanketDevs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTwitter />
          </a>
          <a
            href="https://sanketdevs.hashnode.dev/"
            target="_blank"
            rel="noopener noreferrer"
            title="Blog"
          >
            <ImBlog />
          </a>
        </div>
      </div>
    </section>
  );
};
export default Contact;
