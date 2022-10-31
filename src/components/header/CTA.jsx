import React from 'react'
import CV from '../../my-assets/Pankaj_Singh_Sajwan_resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href="https://drive.google.com/file/d/1962FEHFufkxqs-pcLfzY5K3UuDD2HcPE/view?usp=share_link" download className="btn">
            Download CV
        </a>
        <a href="#contact" className="btn btn-primary">Let's Talk</a>
    </div>
  )
}

export default CTA