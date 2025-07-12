import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpider } from '@fortawesome/free-solid-svg-icons';

function Navbar(){

    return(

                <>

                 <header className="bg-[rgb(255,255,255)] fixed w-full ">
                    <nav>
                        <ul className="flex flex-wrap justify-between item-center p-5 space-x-6 roboto-n1 w-full text-2xl">
                            <li>Built by Mahin <FontAwesomeIcon icon={faSpider} /></li>
                            <li className='ml-auto'>Home</li>
                            <li>Experience</li>
                            <li>Projects</li>
                            <li>Contact</li>
                            <li className='-mt-1'>
                                <button 
                                className="
                                px-4 py-2
                                border-2 border-[rgb(58,124,243)]
                                rounded-lg
                                text-[rgb(58,124,243)] bg-white
                                font-semibold text-[17px]
                                transition-all
                                hover:bg-[rgb(58,124,243)] hover:text-white
                                text-center
                            ">Open CV
                            </button></li>
                   </ul>

                    </nav>



                 </header>

                        
                </>

    )


}

export default Navbar