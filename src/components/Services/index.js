import React from 'react'
import Icon1 from "../../images/svg-1.svg"
import Icon2 from "../../images/svg-2.svg"
import Icon3 from "../../images/svg-3.svg"
import { ServicesContainer, ServicesH1, ServicesH2, ServicesWrapper, ServicesCard, ServicesIcon,ServicesP} from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id="Services">
        <ServicesH1>Products</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
            <ServicesIcon src={Icon1}/>
            <ServicesH2>Offlayers</ServicesH2>
            <ServicesP>
                
            </ServicesP>
            <ServicesH2>R65</ServicesH2>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>  Day old chicks</ServicesH2>
                <ServicesP>
                    
                   
                </ServicesP>

                
            </ServicesCard>
           <ServicesCard>
           <ServicesIcon src={Icon3}/>
                <ServicesH2>Grain Fed </ServicesH2>
                <ServicesP>
                    
                    
                </ServicesP>
                <ServicesH2>R65</ServicesH2>
           </ServicesCard>
            

        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services