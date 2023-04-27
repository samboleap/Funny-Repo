import Image from "next/image";
import Marquee from "react-fast-marquee";
import snatoch from "../assetImage/snatoch.jpg"
import bekkbl from "../assetImage/bekkbal.jpg"
import leng from "../assetImage/leng.jpg"
import naro from "../assetImage/naro.jpg"
import snareturn from "../assetImage/snareturn.jpg"
import deksart from "../assetImage/deksart.jpg"

export default function demo(){
    return (
        <>
 <h1 style={Syt}>Collection Image</h1>
 <Marquee speed={160} direction="left" delay={0.4} height={100}>
   <Image
                src={bekkbl}
                alt="Vercel Logo"
                width={550}
                height={800}
                priority
              />
   <Image
                src={leng}
                alt="Vercel Logo"
                width={550}
                height={800}
                priority
              />
   <Image
                src={naro}
                alt="Vercel Logo"
                width={550}
                height={800}
                priority
              />
   <Image
                src={snatoch}
                alt="Vercel Logo"
                width={550}
                height={800}
                priority
              />
   <Image
                src={snareturn}
                alt="Vercel Logo"
                width={550}
                height={800}
                priority
              />
     <Image
                src={deksart}
                alt="Vercel Logo"
                width={550}
                height={800}
                priority
              />
   
 </Marquee>
 </>
 )
}
const Syt={
   color: 'blue',
   fontSize: '40px',
   fontWeight: 'bold',
   fontFamily: 'Arial',
   textAlign: 'center'
}

  
