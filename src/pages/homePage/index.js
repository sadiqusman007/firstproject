import React from 'react'
import Layout from "../../layout"
import bannerImg from "../../images/home/banner/banner.svg"
import dollarImg from "../../images/home/after_banner/dollar.svg"
import startImg from "../../images/home/after_banner/start.svg"
import teamImg from "../../images/home/after_banner/team.svg"
import whoWeAreImg from "..//../images/home/whoweare/WhoweAre.svg"
import compAuthImg from "..//../images/home/companyauthority/compauth.svg"
import aHImg1 from "..//../images/home/our clients/Alena Herwitz 1.svg"
import aHImg2 from "..//../images/home/our clients/Alena Herwitz 2.svg"
import aHImg3 from "..//../images/home/our clients/Alena Herwitz 3.svg"
import aHImg4 from "..//../images/home/our clients/Alena Herwitz 4.svg"
import aHImg5 from "..//../images/home/our clients/Alena Herwitz 5.svg"
import aHImg6 from "..//../images/home/our clients/Alena Herwitz 6.svg"
import starImg from "..//../images/home/our clients/star.svg"
import './style.css' 
const HomePage = () => {
  return (
    <Layout>
      <section className="banner_section">
        <div className="page_width">
          <div className="banner_grid">
            <div className="banner_left">
              <h3>Best in Dubai</h3>
              <h2>Welcome To</h2>
              <h1>Home <span>Comfort</span></h1>
              <p>Home Comfort provides home repair services in Dubai with reasonable rates. We fix it right with home comfort professional experts.
              </p>
              <div className="btn_button">
                <a href="javascript:void(0);">contact us</a>
                <a href="javascript:void(0);">learn more</a>
              </div>
            </div>
            <div className="banner_right">
              <div className="banner_img"><img src={bannerImg} alt="" /></div>
            </div>
          </div>
        </div>
      </section>
      <section className="section_margin">
        <div className="page_width">
          <div className="after_banner_grid">
            <div className="after_banner_inner">
              <div className="after_banner_img"><img src={startImg} alt="" /></div>
              <h2>24/7 Service</h2>
            </div>  
            <div className="after_banner_inner">
              <div className="after_banner_img"><img src={dollarImg} alt="" /></div>
              <h2>Reasonable Rates</h2>
            </div>  
            <div className="after_banner_inner">
              <div className="after_banner_img"><img src={teamImg} alt="" /></div>
              <h2>Experienced Team</h2>
            </div>  
          </div>
        </div>
      </section>
      <sction className="banner_Explore_our_Services">
      </sction>
      <section className="whoweare">
        <div className="page_width">
          <div className="whoweare_grid">
            <div className="whoweare_left">
              <div className="whoweare_img"><img src={whoWeAreImg} alt="" /></div>
            </div>
            <div className="whoweare_right">
              <h3>Who we <span>Are?</span></h3>
              <p>Home Comfort is a leading multiple service provider company catering to your 360 needs with quality guaranteed. The aim and priority of Home Comfort are to add value to our consumers’ lives by providing smart solutions to all their problems. Our pride is providing the most extensive range of services. From home maintenance to personal assistance.</p>
              <p>We make sure that your safety is never compromised. This is why we hire all the staff under the roof of Home Comfort, just for your satisfaction. Our goal is to become the largest and most famous online home services platform and provide our customers with the best of services and experience. Our experts will give you the most satisfying experience and professionalism. On your demand, all of our best home maintenance and renovation services are available at the very right time and place.</p>           
            </div>
          </div>
        </div>
        

      </section>
      <section className="companyauthority">
        <div className="page_width">
          <div className="companyauthority_grid">
            <div className="companyauthority_left">
              <h4>Company <span>Authority</span></h4>
              <p>Basically, finding the right person to do up the works is very much important and for that, there are certain things you should keep in mind while appointing a service man. Analyze the best service provider who can perform the works well and give you desired results. You can search for professional home service companies online and get the best company that meets up your demands.</p>
              <p>Home Comfort is a leading multiple service provider company catering to your 360 needs with quality guaranteed. The aim and priority of Home Comfort are to add value to our consumers’ lives by providing smart solutions to all their problems. Our pride is providing the most extensive range of services. From home maintenance to personal assistance.</p>
            </div>
            <div className="companyauthority_right">
              <div className="compauth_img"><img src={compAuthImg} alt="" /></div>
            </div>
          </div>
      </div>
      </section>
      <section className="ourclients">  
        <div className="page_width">
          <div className="ourclients_top">
              <h3>Our <span>Clients</span></h3>
              <p>We make sure that your safety is never compromised. This is why we hire all the staff under the roof of Home Comfort, just for your satisfaction. Our goal is to become the <br/> largest and most famous online home services platform and provide our customers with the best of services and experience.</p>
          </div>
          <div className="ourclients_inner_grid">
          
          <div className="ourclients_inner_grid_box">
            <div><img src={aHImg1} alt="" /></div>
            <div className="client_name">
              <h5>Alena Herwitz</h5>
            <div className="client_star">
            <h4>3 Months ago</h4>
              <img src={starImg} alt="" />
            </div>
            <div className="client_msg">
              <p>We make sure that your safety is never compromised. This is why we hire all the staff under the roof of Home Comfort, just for your satisfaction.</p>
            </div>
           </div>
          </div>
          <div className="ourclients_inner_grid_box">
            <div><img src={aHImg2} alt="" /></div>
            <div className="client_name">
              <h5>Alena Herwitz</h5>
            <div className="client_star">
            <h4>3 Months ago</h4>
              <img src={starImg} alt="" />
            </div>
            <div className="client_msg">
              <p>We make sure that your safety is never compromised. This is why we hire all the staff under the roof of Home Comfort, just for your satisfaction.</p>
            </div>
           </div>
          </div>
          <div className="ourclients_inner_grid_box">
            <div><img src={aHImg3} alt="" /></div>
            <div className="client_name">
              <h5>Alena Herwitz</h5>
            <div className="client_star">
            <h4>3 Months ago</h4>
              <img src={starImg} alt="" />
            </div>
            <div className="client_msg">
              <p>We make sure that your safety is never compromised. This is why we hire all the staff under the roof of Home Comfort, just for your satisfaction.</p>
            </div>
           </div>
          </div>
          <div className="ourclients_inner_grid_box">
            <div><img src={aHImg4} alt="" /></div>
            <div className="client_name">
              <h5>Alena Herwitz</h5>
            <div className="client_star">
            <h4>3 Months ago</h4>
              <img src={starImg} alt="" />
            </div>
            <div className="client_msg">
              <p>We make sure that your safety is never compromised. This is why we hire all the staff under the roof of Home Comfort, just for your satisfaction.</p>
            </div>
           </div>
          </div>
          <div className="ourclients_inner_grid_box">
            <div><img src={aHImg5} alt="" /></div>
            <div className="client_name">
              <h5>Alena Herwitz</h5>
            <div className="client_star">
            <h4>3 Months ago</h4>
              <img src={starImg} alt="" />
            </div>
            <div className="client_msg">
              <p>We make sure that your safety is never compromised. This is why we hire all the staff under the roof of Home Comfort, just for your satisfaction.</p>
            </div>
           </div>
          </div>
          <div className="ourclients_inner_grid_box">
            <div><img src={aHImg6} alt="" /></div>
            <div className="client_name">
              <h5>Alena Herwitz</h5>
            <div className="client_star">
            <h4>3 Months ago</h4>
              <img src={starImg} alt="" />
            </div>
            <div className="client_msg">
              <p>We make sure that your safety is never compromised. This is why we hire all the staff under the roof of Home Comfort, just for your satisfaction.</p>
            </div>
           </div>
          </div>
          
          </div>
          
        </div>
      </section>
    </Layout>
  )
}

export default HomePage
