import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import htmlLogo from '/html5.svg'; // adjust the path as needed
import jsLogo from '/javascript.svg'
import mongoLogo from '/mongodb.svg'
import nodeLogo from '/nodedotjs.svg'
import postLogo from '/postgresql.svg'
import reactLogo from '/react.svg'
import tailLogo from '/tailwindcss.svg'
import tsLogo from '/typescript.svg'


function Binfo(){

    return(
        <>
        
<div className="bg-gray-50 pt-25 flex flex-col md:flex-row items-start gap-10 px-6">

  <div className="w-full md:w-1/2 md:ml-[30px]">
    <h1 className="tiktok-sans-n1 font-bold text-[#2d2e32] text-4xl md:text-6xl mt-10 md:mt-40">
      Full-Stack Developer 👋🏻
    </h1>
    <p className="font-light text-[#2d2e32] pt-6">
      I'm Mahin Rajput — passionate about crafting clean, performant, and user-first web experiences.
    </p>
    <div className="pt-4 flex space-x-4">
      <a href="" className="text-[#2d2e32]">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="" className="text-[#2d2e32]">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
    </div>
  </div>

  {/* <div className="bg-red-100 w-full md:w-[480px] h-[100px]">
 
  </div> */}

<div
  className="w-full md:w-[40vw] h-[70vw] md:h-[30vw]"
  style={{
    WebkitAnimation: 'morph 8s ease-in-out infinite',
    animation: 'morph 8s ease-in-out infinite',
    backgroundImage: 'url(/1714299748434.jpeg)',
    backgroundPosition: '50%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    border: '3px solid #2d2e32',
    borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
    position: 'relative',
    transition: 'all 1s ease-in-out',
  }}
></div>
</div>

<div className='bg-gray-50 w-full md: h-40'>
    <ul className='flex flex-wrap pt-10 md:ml-[45px] space-x-4'>
        <li className='tiktok-sans-n1 font-light text-[#2d2e32] text-xl pr-[25px] border-r-2 border-gray-500'>Tech Stack</li>
        <li><img src={htmlLogo} alt="" className="h-8 w-auto" /></li>
        <li><img src={jsLogo} alt="" className='h-8 w-auto' /></li>
        <li><img src={mongoLogo} alt="" className='h-8 w-auto'/></li>
        <li><img src={nodeLogo} alt="" className='h-8 w-auto'/></li>
        <li><img src={postLogo} alt="" className='h-8 w-auto'/></li>
        <li><img src={reactLogo} alt="" className='h-8 w-auto'/></li>
        <li><img src={tailLogo} alt="" className='h-8 w-auto'/></li>
        <li><img src={tsLogo} alt="" className='h-8 w-auto'/></li>
    </ul>
</div>

        
        </>
    )


}

export default Binfo