import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg ,HeroContent, HeroH1,HeroBtnWrapper,ArrowForward,ArrowRight,HeroP} from './HeroElements'
import { Button } from '../ButtonElements';



const HeroSection =()=> {
    const [hover,setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    };

  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type ='video/mp4'/>

        </HeroBg>
        <HeroContent>
            <HeroH1> Tegra Foods Market</HeroH1>
            <HeroP>
                Get in touch for all your chicken requirements available in stock.

            </HeroP>
            <HeroBtnWrapper>
                <Button
                 to="Shop Now" 
                 onMouseEnter={onHover} 
                 onMouseLeave={onHover}
                 primary='true'
                 dark='true'>
                 
                    Order {hover ? <ArrowForward /> : <ArrowRight/>}
                </Button>
            </HeroBtnWrapper>

        </HeroContent>

    </HeroContainer>
  )
  }

export default HeroSection