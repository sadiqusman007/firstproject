import React from 'react'
import Layout from "../../layout"
import pRightImg from "../../images/service/providedsolution/providesolutionright.svg"
import pLeftImg from "../../images/service/providedsolution/providesolutionleft.svg"
import compAuthImg from "..//../images/home/companyauthority/compauth.svg"
import impCoolImg from "..//../images/service/ourbenifits/improvedcooling.svg"
import eneEffImg from "..//../images/service/ourbenifits/energyefficiency.svg"
import reliAbilImg from "..//../images/service/ourbenifits/reliability.svg"
import './style.css'

const ServicePage = () => {
  return (
    <Layout>
        <section className="servicebanner_section">
        <div className="page_width">
                <div>
                    <div className="servicebanner_left">
                        <h3>Our Services</h3>
                        <h2>AC Duct <br/><span>Cleaning Services</span></h2>
                        <div className="servicebanner_left_btn">
                            <a href="javascript:void(0);">book now</a>
                            <a href="javascript:void(0);">contact us</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="service_contctus_section">
            <div className="page_width">
                <div className="get50p">
                    <h3>Get 50% off</h3>
                </div>
                <div className="service_contactus">
                    <form className="form_contactus" method="">
                        <input type="text" placeholder="" />
                        <input type="text" placeholder="" /><br/><br/>
                        <input type="text" placeholder="" />
                        <input type="text" placeholder="" /><br/><br/>
                        <input type="text" placeholder="" />
                        

                    </form>
                </div>
                    
                    
                    
                    
                    

                
                
                
            </div>
        </section>
        <section className="providedsolution">
            <div className="page_width">
                <div className="providedsolution_grid_top">
                    <div className="providedsolution_grid_top_left">
                    <h2>Provided <span>Solutions</span></h2>
                    <p>Dubai has a lovely environment that attracts people to visit or stay in Dubai. But this lovely environment becomes scorching hot with an AC breakdown. To keep your AC from breaking down, the best way is regular AC maintenance. To keep your cool and fresh all year round, it is best to employ proper AC Services in dubai.</p>                     
                    <p>Our Home Comfort team are master technicians who have experience in providing a multitude of AC services, including AC installation, AC repair, AC maintenance, and many other AC services dubai. They can not only easily find the faults but also repair them without affecting the quality of AC services. Don’t Forget to CONTACT US when your AC requires servicing, you can also call on us for regular AC maintenance. We guarantee the quality of our service.</p>
                    </div>
                    <div className="providedsolution_grid_top_right">
                    <div className="providedsolution_grid_img"><img src={pRightImg} alt="" /></div> 
                    </div>
                </div>
                <div className="providedsolution_grid_top">
                    <div className="providedsolution_grid_top_right">
                    <div className="providedsolution_grid_img"><img src={pLeftImg} alt="" /></div> 
                    </div>
                    <div className="providedsolution_grid_top_left">
                    <p>Our Home Comfort team are master technicians who have experience in providing a multitude of AC services, including AC installation, AC repair, AC maintenance, and many other AC services dubai. They can not only easily find the faults but also repair them without affecting the quality of AC services. Don’t Forget to CONTACT US when your AC requires servicing, you can also call on us for regular AC maintenance. We guarantee the quality of our service.
                    </p>                     
                    <p>Our Home Comfort team are master technicians who have experience in providing a multitude of AC services, including AC installation, AC repair, AC maintenance, and many other AC services dubai. They can not only easily find the faults but also repair them without affecting the quality of AC services. Don’t Forget to CONTACT US when your AC requires servicing, you can also call on us for regular AC maintenance. We guarantee the quality of our service.
                    </p>
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
      <section>
        <div className="page_width">
            <div className="ourbenifits">
                <h2>Our <span>Benifits</span></h2>
                <p>We make sure that your safety is never compromised. This is why we hire all the staff under the roof of Home Comfort, just for your satisfaction. Our goal is to become the largest and most famous online home services platform and provide our customers with the best of services and experience.</p>
            </div>
            <div className="ourbenifits_grid">
                <div className="ourbenifits_inner">
                    <div className="ourbenifits_img"><img src={impCoolImg} alt="" /></div>
                    <h2>Improved Cooling</h2>
                    <p>Regular AC servicing maintains the effectiveness of your AC, ensuring all mechanical components are workingoptimally whilst also getting obviate dust and germs
                    </p>
                </div>
                <div className="ourbenifits_inner">
                    <div className="ourbenifits_img"><img src={eneEffImg} alt="" /></div>
                    <h2>Reliability</h2>
                    <p>Regular AC servicing maintains the effectiveness of your AC, ensuring all mechanical components are workingoptimally whilst also getting obviate dust and germs
                    </p>
                </div>
                <div className="ourbenifits_inner">
                    <div className="ourbenifits_img"><img src={reliAbilImg} alt="" /></div>
                    <h2>Energy Efficiency</h2>
                    <p>Regular AC servicing maintains the effectiveness of your AC, ensuring all mechanical components are workingoptimally whilst also getting obviate dust and germs
                    </p>
                </div>
            </div>
        </div>
      </section>
    </Layout>
  )
}


export default ServicePage
