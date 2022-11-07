import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { FiBook } from "react-icons/fi";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { GrDocumentDownload } from "react-icons/gr";
import {CgWebsite} from 'react-icons/cg'

import "./navbar.css";
const Navbar = () => {
  const [acitveNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={acitveNav === "#" ? "active" : ""}
      >
        {" "}
        <AiOutlineHome />{" "}
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={acitveNav === "#about" ? "active" : ""}
      >
        {" "}
        <AiOutlineUser />{" "}
      </a>
      <a
        href="#expericence"
        onClick={() => setActiveNav("#expericence")}
        className={acitveNav === "#expericence" ? "active" : ""}
      >
        {" "}
        <FiBook />{" "}
      </a>
      <a href="#contact">
        {" "}
        <MdOutlinePermContactCalendar
          onClick={() => setActiveNav("#contact")}
          className={acitveNav === "#contact" ? "active" : ""}
        />{" "}
      </a>
      <a
              href="#portifilo"
              onClick={() => setActiveNav("#portifilo")}
              className={acitveNav === "#portifilo" ? "active" : ""}
            >
              {" "}
              <CgWebsite /> {" "}
            </a>
      <a
        href="https://drive.google.com/file/d/1962FEHFufkxqs-pcLfzY5K3UuDD2HcPE/view?usp=share_link"
        download
      >
        <GrDocumentDownload
          className={acitveNav === "#resume" ? "active" : ""}
        />
      </a>
    </nav>
  );
};

export default Navbar;
