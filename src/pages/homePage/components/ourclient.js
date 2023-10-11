import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import ClientCard from '../../../components/clientCard'
import AlenaHerwitzImg1 from "../../../images/home/our clients/Alena Herwitz 1.svg"
import AlenaHerwitzImg2 from "../../../images/home/our clients/Alena Herwitz 2.svg"
import AlenaHerwitzImg3 from "../../../images/home/our clients/Alena Herwitz 3.svg"
import AlenaHerwitzImg4 from "../../../images/home/our clients/Alena Herwitz 4.svg"
import AlenaHerwitzImg5 from "../../../images/home/our clients/Alena Herwitz 5.svg"
import AlenaHerwitzImg6 from "../../../images/home/our clients/Alena Herwitz 6.svg"

const Ourclient = () => {
    return (
        <div>
            <div className="page_width">
                <div className="ourclient">
                    <div className="top_part">
                        <div className="title">
                            <h2>Our <span>Clients</span></h2>
                        </div>
                        <p>We make sure that your safety is never compromised. This is why we hire all the staff under the roof of Home Comfort, just for your satisfaction. Our goal is to become the largest and most famous online home services platform and provide our customers with the best of services and experience.</p>
                    </div>
                    <div className="client_rev">
                        <ClientCard avatar={AlenaHerwitzImg1} name='Alena Herwitz' created='3 Months ago'
                        desc='We make sure that your safety is never compromised. This is why we hire all the staff under the roof of Home Comfort, just for your satisfaction.'
                        />
                        <ClientCard avatar={AlenaHerwitzImg2} name='Alena Herwitz' created='3 Months ago'
                        desc='We make sure that your safety is never compromised. This is why we hire all the staff under the roof of Home Comfort, just for your satisfaction.'
                        />
                        <ClientCard avatar={AlenaHerwitzImg3} name='Alena Herwitz' created='3 Months ago'
                        desc='We make sure that your safety is never compromised. This is why we hire all the staff under the roof of Home Comfort, just for your satisfaction.'
                        />
                        <ClientCard avatar={AlenaHerwitzImg4} name='Alena Herwitz' created='3 Months ago'
                        desc='We make sure that your safety is never compromised. This is why we hire all the staff under the roof of Home Comfort, just for your satisfaction.'
                        />
                        <ClientCard avatar={AlenaHerwitzImg5} name='Alena Herwitz' created='3 Months ago'
                        desc='We make sure that your safety is never compromised. This is why we hire all the staff under the roof of Home Comfort, just for your satisfaction.'
                        />
                        <ClientCard avatar={AlenaHerwitzImg6} name='Alena Herwitz' created='3 Months ago'
                        desc='We make sure that your safety is never compromised. This is why we hire all the staff under the roof of Home Comfort, just for your satisfaction.'
                        />
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ourclient
