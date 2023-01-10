import React from 'react'
import monster from '../../my-assets/monster_project.png'
import './portifilo.css'
import img3 from '../../my-assets/img3.jpg'


const Portifilo = () => {
  return (
    <section id="portifilo">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">

      <article className="portfolio_item">
          <div className="portfolio_item-image">
              <img src={monster} alt=""  className="portfolio-img"/>
          </div>
          <div className="protfolio_item-image_Tech_Stack">
          <p>Monster-jobs is a source for jobs and career opportunities. Search for jobs, read career advice from Monster's job experts, and find hiring and recruiting ...</p>
          <h4><b>Tech-Stack : </b> JavaScript, React JS, Github,chakra UI</h4>
          <h4>A collaborative project built by a team of 4 executed in 5 days.</h4>
          </div>
          <div className="portfolio_item-cta">
          <a href="https://github.com/pankajsajwan12/skinny-pot-4052" className='btn'target="_blank">Github</a>
          <a href="https://monster-iota.vercel.app/" className="btn btn-primary" target="_blank">Live</a>
          </div>
          
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
              <img src="https://user-images.githubusercontent.com/99641288/171843057-6bf12c27-db8a-46eb-9bf4-3282c1d2687e.png" alt=""  className="portfolio-img"/>
          </div>
          <div className="protfolio_item-image_Tech_Stack">
          <p>KFC is online food order website</p>
          <h4><b >Tech-Stack : </b> HTML,CSS, Javascript, Git</h4>
          <h4>A collaborative project built by a team of 5 executed in 5 days.</h4>
          </div>
          <div className="portfolio_item-cta">
          <a href="https://github.com/pankajsajwan12/ProjectFirst" className='btn'target="_blank">Github</a>
          <a href="https://polite-lamington-faa8d2.netlify.app/" className="btn btn-primary" target="_blank">Live</a>
          </div>
          
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
              <img src="https://user-images.githubusercontent.com/99667776/169653484-3ddb5c0e-5af0-4525-be8d-515fc0caa5af.png" alt="" className="portfolio-img"/>
          </div>
          <div className="protfolio_item-image_Tech_Stack">
          <p >strawberrynet is online e-commerce beauty products website</p>
          <h4><b style={{fontWeight : '700'}}>Tech-Stack : </b> HTML,CSS, Javascript, Git </h4>
          <h4>A collaborative project built by a team of 5 executed in 5 days.</h4>
          </div>
          <div className="portfolio_item-cta">
          <a href="https://github.com/KalashThakur/straberrynet" className='btn' target="_blank">Github</a>
          <a href="https://imaginative-praline-24d6d4.netlify.app/" className="btn btn-primary" target="_blank">Live</a>

          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
              <img src={img3} alt="" className="portfolio-img"/>
          </div>
          <div className="protfolio_item-image_Tech_Stack">
          <p>zara is online e-commerce clothes  website</p>
          <h4><b>Tech-Stack : </b>&nbsp;HTML,CSS, Javascript, Git </h4>
          </div>
          <div className="portfolio_item-cta">
          <a href="https://github.com/pankajsajwan12/zara-clone" className='btn' target="_blank">Github</a>
          <a href="https://eloquent-semolina-66e2d9.netlify.app/" className="btn btn-primary" target="_blank">Live Demo</a>
          </div>
        </article>

        
      </div>
    </section>
  )
}

export default Portifilo