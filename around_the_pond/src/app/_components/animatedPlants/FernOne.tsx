'use client'
import { useSpring, animated } from "@react-spring/web"
import "../../styles/pond.css"
import { useEffect, useState } from "react";

export default function FernOne(): JSX.Element {

    interface Shimmy {transform: string, transformOrigin:string, opacity:number}

    const shimmyRight: Shimmy = {
        transform: 'rotate(-5deg)', 
        transformOrigin:'bottom center',
        opacity:.4,
    }

    const shimmyLeft: Shimmy = {
        transform: 'rotate(5deg)', 
        transformOrigin:'bottom center',
        opacity:.6,
    }

    const [fernShimmy, setShimmy] = useState<Shimmy>(shimmyLeft);



    const [fernStyle, fernApi] = useSpring(() => ({
        transform: 'rotate(0deg)', transformOrigin:'bottom center', opacity:.5,
        config: {
            mass:1,
            tension: 280,
            friction: 60,
        }
        
    }));

    useEffect(() => {
        console.log(`current state of fern is: ${fernShimmy.transform}`)

        const interval = setInterval(() => { 

        let nextShimmy = fernShimmy === shimmyLeft? shimmyRight : shimmyLeft;

        setShimmy(nextShimmy);

        fernApi.start({
            from: fernShimmy,
            to: nextShimmy,
            
        })

        console.log(`shimmy has started with ${fernShimmy.transform}`);

    }, 10000)

    return () => clearInterval(interval);

    },[fernShimmy, fernApi]);

 
    return (
        <animated.div className="fern1" style={{...fernStyle}} >

        </animated.div>
    )
}