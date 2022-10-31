import React from 'react'
import GitHubCalendar from 'react-github-calendar';
import './footer.css'
const Footer = () => {
  return (
    <section className='footer_main_class'>
      <h2>Days I Code</h2>
      <div className='streak_img'>
        <img src="https://github-readme-streak-stats.herokuapp.com/?user=pankajsajwan12&" alt="pankajsajwan12" />
      </div>
      <div className='streak_img'>
      <img src="https://github-readme-stats.vercel.app/api?username=pankajsajwan12&show_icons=true&locale=en" alt="pankajsajwan12" />
      </div>  
      <div className='github_calender'  >
         <GitHubCalendar className="calender_font" username="pankajsajwan12" year={new Date().getFullYear()} />
      </div>
    </section>
  )
}

export default Footer