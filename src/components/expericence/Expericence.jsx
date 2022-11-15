import React from 'react'
import './expericence.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import html from '../../my-assets/html.png'
import css from '../../my-assets/css3.png'
import js from '../../my-assets/js.jpg'
import node from '../../my-assets/nodejs.jpg'
import git from '../../my-assets/git.png'
import mongodb from '../../my-assets/mongo.jpg'
import chkara from '../../my-assets/chkaraui.png'
import material from '../../my-assets/materialui.png'
import redux from '../../my-assets/redux2.png'
import react from '../../my-assets/reactjs.png'
import express from '../../my-assets/express2png.png'
import mogoose from '../../my-assets/mongosse.png'
import problem from '../../my-assets/problem.png'
import collarbate from '../../my-assets/collarbate.png'
import adaptability from '../../my-assets/adaptability.jpg'
import postman from '../../my-assets/postman.png'
import netlify from '../../my-assets/netlify.svg'
import dsa from '../../my-assets/dsa.png'


const Expericence = () => {
  return (
    <section id="expericence">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_fronted">
            <h3>TECHNICAL SKILL</h3>
            <div className="experience_content">
              <article className="experience_details">
              
                <small className="text-light">
                  <img src={html} alt='HTML' className='heroImage_skill'/>
                  <h3>HTML</h3>
                </small>
                
              </article>

              <article className="experience_details">
                
                <small className="text-light">
                  <img src={css} alt="CSS"  className='heroImage_skill'/>
                  <h3>CSS</h3>
                </small>
                
              </article>

              <article className="experience_details">
                
                <small className="text-light">
                <img src={js} alt="JAVASCRIPT"  className='heroImage_skill'/>
                <h3>JavaScript</h3>
                </small>
                
              </article>

              <article className="experience_details">
                
                <small className="text-light">
                <img src={node} alt="NODEJS"  className='heroImage_skill'/>
                <h3>Node Js</h3>
                </small>
                
              </article>

              <article className="experience_details">
                <div>
                <img src={git} alt="GIT&GITHUB"  className='heroImage_skill'/>
                <h3>Git & GitHub</h3>
                </div>
              </article>

              <article className="experience_details">
                <small className="text-light">
                <img src={mongodb} alt="MONGODB"  className='heroImage_skill'/>
                <h3>Mongo DB</h3>
                </small>
              </article>

              <article className="experience_details">
                <small className="text-light">
                <img src={dsa} alt="DSA"  className='heroImage_skill'/>
                <h3>DSA</h3>
                </small>
              </article>
            </div>
        </div>
        {/* END OF FRONTEND */}

        <div className="experience_backend">
        <h3>FRAMEWORK & LIBRARY</h3>
            <div className="experience_content">
              <article className="experience_details">
                <small className="text-light">
                <img src={chkara} alt="CHKARAUI"  className='heroImage_skill'/>
                <h3>Chakra UI</h3>
                </small>
              </article>

              <article className="experience_details">
                <div>
                <small className="text-light">
                <img src={material} alt="Material UI"  className='heroImage_skill'/>
                <h3>Material UI</h3>
                </small>
                </div>
              </article>

              <article className="experience_details">
                <div>
                <small className="text-light">
                <img src={redux} alt="Redux"  className='heroImage_skill'/>
                <h3>Redux</h3>
                </small>
                </div>
              </article>

              <article className="experience_details">
                <small className="text-light">
                <img src={react} alt="Redux"  className='heroImage_skill'/> 
                <h3>React JS</h3>
                </small>
              </article>

              <article className="experience_details">

                <small className="text-light">
                <img src={express} alt="Express"  className='heroImage_skill'/>  
                <h3>Express Js</h3>           
                </small>
              </article>

              <article className="experience_details">
                <small className="text-light">
                <img src={mogoose} alt="Mongoose"  className='heroImage_skill'/>  
                <h3>Mongoose</h3>
                </small>
              </article>

              <article className="experience_details">
                <small className="text-light">
                <img src={postman} alt="Postman"  className='heroImage_skill'/>  
                <h3>Postman</h3>
                </small>
                </article>

                <article className="experience_details">
                <small className="text-light">
                <img src={netlify} alt="Netlify"  className='heroImage_skill'/>  
                <h3>Netlify</h3>
                </small>
             
              </article>
            </div>
          </div>

         <div className="experience_backend">
        <h3>SOFT SKILLS</h3>
            <div className="experience_content">
              <article className="experience_details">
                <small>
                <img src={adaptability} alt="Teamwork"  className='heroImage_skill'/> 
                <h3>Adaptability</h3>
              </small>
              </article>

              <article className="experience_details">
                <small>
                <img src={collarbate} alt="Teamwork"  className='heroImage_skill'/> 
                <h3>Teamwork</h3>
                </small>
              </article>

              <article className="experience_details">
                <small>
                <img src={problem} alt="Problem Solving"  className='heroImage_skill'/> 
                <h3>Problem-Solving</h3>
                </small>
              </article>

            </div>
          </div> 
      </div>
    </section>
  )
}

export default Expericence