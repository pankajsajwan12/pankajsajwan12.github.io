import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { FiBook } from "react-icons/fi";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { GrDocumentDownload } from "react-icons/gr";
import {CgWebsite} from 'react-icons/cg'
import {useNavigate} from 'react-router-dom'
import resume from '../../my-assets/Pankaj_Singh_Sajwan_resume.pdf'

import "./navbar.css";
const Navbar = () => {
  const [acitveNav, setActiveNav] = useState("#");
  const navigate = useNavigate();

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
        target="_blank"
        href={resume}
        download 
      >
        <button onClick={() => {
                window.open("https://drive.google.com/file/d/1962FEHFufkxqs-pcLfzY5K3UuDD2HcPE/view?usp=share_link")
              }} style={{background:'none'}}>             
        <GrDocumentDownload
          className={acitveNav === "#resume" ? "active" : ""}
        />
         </button> 
      </a>
    </nav>
  );
};

export default Navbar;
