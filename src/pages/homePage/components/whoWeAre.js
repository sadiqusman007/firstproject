import React from 'react'
import whoWeAreImg from "../../../images/home/whoweare/WhoweAre.svg"
    import compAuthImg from "../../../images/home/whoweare/compauth.svg"


const WhoWeAre = () => {
  return (
    <div>
        <div className="page_width">
            <div className="whowe_are">
                <div className="left_hand">
                    <img src={whoWeAreImg} alt="" />
                </div>
                <div className="right_hand">
                    <div className="title">
                        <h2>Who we <span>Are?</span></h2>
                    </div>
                    <div className="right_hand_text">
                        <p>Home Comfort is a leading multiple service provider company catering to your 360 needs with quality guaranteed. The aim and priority of Home Comfort are to add value to our consumers’ lives by providing smart solutions to all their problems. Our pride is providing the most extensive range of services. From home maintenance to personal assistance.</p>
                        <p>We make sure that your safety is never compromised. This is why we hire all the staff under the roof of Home Comfort, just for your satisfaction. Our goal is to become the largest and most famous online home services platform and provide our customers with the best of services and experience. Our experts will give you the most satisfying experience and professionalism. On your demand, all of our best home maintenance and renovation services are available at the very right time and place.</p>
                    </div>
                </div>
            </div>
            <div className="whoweare">
                <div className="whoweare_left">
                    <h2>Company <span>Authority</span></h2>
                    <div className="whoweare_left_text">
                    <p>Basically, finding the right person to do up the works is very much important and for that, there are certain things you should keep in mind while appointing a service man. Analyze the best service provider who can perform the works well and give you desired results. You can search for professional home service companies online and get the best company that meets up your demands.</p>
                    <p>Home Comfort is a leading multiple service provider company catering to your 360 needs with quality guaranteed. The aim and priority of Home Comfort are to add value to our consumers’ lives by providing smart solutions to all their problems. Our pride is providing the most extensive range of services. From home maintenance to personal assistance.</p>
                    </div>
                </div>
                <div className="whoweare_right">
                    <img src={compAuthImg} alt="" />
                </div>
            </div>


        </div>
      
    </div>
  )
}

export default WhoWeAre
