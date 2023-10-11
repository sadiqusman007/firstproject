import React from 'react'
import ServiceCard from '../../../components/serviceCard'
import acServiceImg from "../../../images/home/exploreourservices/acServiceImg.svg"
import ductCleaningImg from "../../../images/home/exploreourservices/ductCleaningImg.svg"
import handyManImg from "../../../images/home/exploreourservices/handyManImg.svg"
import plumbingImg from "../../../images/home/exploreourservices/plumbingImg.svg"

const ExploreComponents = () => {
  return (
      <div className="expolore_components">
        <div className="page_width">
        <div className="title">
             <h2>Who we <span>Are?</span></h2>
        </div>
        <div className="expolore_services">
          <ServiceCard cardImages={acServiceImg} title='AC Services' />
          <ServiceCard cardImages={ductCleaningImg} title='Duct Cleaning' />
          <ServiceCard cardImages={handyManImg} title='Handyman' />
          <ServiceCard cardImages={plumbingImg} title='Plumbing' />
        </div>
        </div>


      </div>
      
    
  )
}

export default ExploreComponents
