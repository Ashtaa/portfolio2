import React from 'react'
import ecommerce from "./../img/ecommerce.png"
import coursera from "./../img/coursera.png"
import './project.css'

function Projects() {
  return (
    <div className='project-container'>
       <div className='img-container'><a href='https://ablack-6e21c.web.app/'><img src={ecommerce} className='project-img' /></a>
       <h3 className='h3'>e commerce</h3>
       <p>an  e commerce websit i s a platform which users buy products. as a frontend developer i use firebase for the authenitication and hosting also i use react for other things. it includes search filter and contain add to cart</p>
       </div>
       <div className='img-container'><a href='https://ashtaa.github.io/coursera/'><img src={coursera} className='project-img' /></a>
       <h3 className='h3'>final project</h3>
       <p>It is a React website provided as part of the Advanced React course offered by IBM on Coursera.
</p>
       </div>
    </div>
  )
}

export default Projects
