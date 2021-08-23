import React from 'react'
import icon1 from "../../images/svg-1.svg";
import icon2 from "../../images/svg-2.svg";
import icon3 from "../../images/svg-3.svg";
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from "./ServicesElements"
const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={icon1} />
                    <ServicesH2>Reduce Expenses</ServicesH2>
                    <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel sapien in leo dignissim interdum. Ut eget justo et sem egestas tempor. Morbi sollicitudin hendrerit lectus, sit amet pretium metus iaculis id.  </ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={icon2} />
                    <ServicesH2>Virtual Offices</ServicesH2>
                    <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel sapien in leo dignissim interdum. Ut eget justo et sem egestas tempor. Morbi sollicitudin hendrerit lectus, sit amet pretium metus iaculis id.  </ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={icon3} />
                    <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel sapien in leo dignissim interdum. Ut eget justo et sem egestas tempor. Morbi sollicitudin hendrerit lectus, sit amet pretium metus iaculis id.  </ServicesP>
                </ServicesCard>


            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
