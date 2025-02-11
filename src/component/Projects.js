import React from 'react'
import ecommerce from "./../img/ecommerce.png"
import coursera from "./../img/coursera.png"
import weather from './../img/weather.png'
import './project.css'

function Projects({theme}) {
  return (
    <div className={`project-container ${theme}`}>
       <div className='img-container'><a href='https://ablack-6e21c.web.app/'><img src={ecommerce} className='project-img'  alt="e commerce" /></a>
       <h3 className='h3'>e commerce</h3>
       <p className={`projeect-p ${theme}`}>an  e commerce websit i s a platform which users buy products. as a frontend developer i use firebase for the authenitication and hosting also i use react for other things. it includes search filter and contain add to cart</p>
       </div>
       <div className='img-container'><a href='https://ashtaa.github.io/coursera/'><img src={coursera} className='project-img'  alt="coursera" /></a>
       <h3 className='h3'>final project</h3>
       <p className={`projeect-p ${theme}`}>It is a React website provided as part of the Advanced React course offered by IBM on Coursera.
</p>
       </div>
       <div className='img-container'><a href='https://ashtaa.github.io/weather/'><img src={weather} className='project-img'  alt="weather" /></a>
       <h3 className='h3'>weather</h3>
       <p className={`projeect-p ${theme}`}>It is a React website  use api to fatch specific place weather and use serch engine.
</p>
       </div>
       
    </div>
  )
}

export default Projects
