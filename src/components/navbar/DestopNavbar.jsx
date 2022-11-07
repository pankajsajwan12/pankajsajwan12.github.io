import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { FiBook } from "react-icons/fi";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { AiOutlineFileText } from "react-icons/ai";
import {CgWebsite} from 'react-icons/cg'
import "./navbar.css";

const DestopNavbar = () => {
  const [acitveNav, setActiveNav] = useState("#");
  return (
    <div className="DestopNavBar">
      <div className="DestopNavbar_main">
        <div className="name_Logo">
          <a
            href="#"
            onClick={() => setActiveNav("#")}
            className={acitveNav === "#" ? "active" : ""}
          >
            {" "}
            Pankaj Singh Sajwan{" "}
          </a>
        </div>
        {/* NavBar has Home, AboutMe, Skills, Project, Contact & Resume */}
        <div className="navbar_text">
          <div>
            <a
              href="#"
              onClick={() => setActiveNav("#")}
              className={acitveNav === "#" ? "active" : ""}
            >
              {" "}
              <AiOutlineHome  className="reactIcons"/> Home{" "}
            </a>
          </div>
          <div>
            <a
              href="#about"
              onClick={() => setActiveNav("#about")}
              className={acitveNav === "#about" ? "active" : ""}
            >
              {" "}
              <AiOutlineUser className="reactIcons" /> About Me{" "}
            </a>
          </div>
          <div>
            <a
              href="#expericence"
              onClick={() => setActiveNav("#expericence")}
              className={acitveNav === "#expericence" ? "active" : ""}
            >
              {" "}
              <FiBook className="reactIcons" /> Skills
            </a>
          </div>
          <div>
            <a
              href="#portifilo"
              onClick={() => setActiveNav("#portifilo")}
              className={acitveNav === "#portifilo" ? "active" : ""}
            >
              {" "}
              <CgWebsite className="reactIcons" /> Project{" "}
            </a>
          </div>
          <div>
            <a
              href="#contact"
              onClick={() => setActiveNav("#contact")}
              className={acitveNav === "#contact" ? "active" : ""}
            >
              {" "}
              <MdOutlinePermContactCalendar className="reactIcons" /> Contact{" "}
            </a>
          </div>
          <div>
            <a
              href="https://drive.google.com/file/d/1962FEHFufkxqs-pcLfzY5K3UuDD2HcPE/view?usp=share_link"
              download
            >
              <AiOutlineFileText className="reactIcons" /> Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestopNavbar;
