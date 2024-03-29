import React, {useState} from 'react'
import { Link } from 'react-router-dom'



const Navbar = ({home}) => {
  const [dropdown, setDropdown] = useState(false);

  const mobileHandler = () => {
    setDropdown (!dropdown)
  }



  return (
    <div className='nav align-middle z-10'>
          <Link to="/">
          <span className='flex flex-col font-bold text-2xl leading-6 uppercase text-center pl-8 cursor-pointer'>
              Global 
            <span>
                Watch
            </span>
            <span className='text-xs text-[#C2956D]'>
              Catalogue
            </span>
          </span>      
            </Link>
      <ul className={`${!dropdown ? `h-0` : `h-full bg-slate-800 top-60 py-20`} lg:h-auto flex lg:flex-row flex-col my-auto align-middle overflow-y-hidden lg:overflow-y-visible transition-all ease-in duration-1000 gap-12 ml-auto mr-auto lg:relative lg:top-0 absolute w-full inset-0 lg:inset-auto items-center lg:py-0 lg:bg-transparent lg:ml-auto lg:float-right lg:w-fit`}>
        <li>
          <Link to="/"><span className='hover:text-slate-300 transition-all duration-300 cursor-pointer' onClick={()=>setDropdown(false)}>Home</span></Link>
        </li>
        <li>
          {!home ?
            <a href="#about"><span className='hover:text-slate-300 transition-all duration-300 cursor-pointer' onClick={() => setDropdown(false)}>About</span></a>
            :
            <Link to="/"><span className='hover:text-slate-300 transition-all duration-300 cursor-pointer' onClick={() => setDropdown(false)}>About</span></Link>
          }
        </li>
        <li>
          <span className='transition-all duration-300 flex flex-col items-center group'> 
            {!home ?
            <a href="#services" className='cursor-pointer hover:text-slate-300 z-[50]'><div onClick={() => setDropdown(false)}>Services</div></a>
              :
            <Link to="/"><span className='cursor-pointer hover:text-slate-300 z-[50]'><div onClick={() => setDropdown(false)}>Services</div></span></Link>
            }
            <div className="w-36 h-36 bg-transparent absolute lg:flex hidden"></div>
          <ul className='group-hover:h-fit flex flex-col lg:top-16 bg-slate-600 lg:absolute gap-4 h-0 overflow-y-hidden group-hover:py-3  transition-all ease-in duration-300 z-10'>
            <li>
                {!home ?
                  <a href="#immigrationService"><span className='m-6 hover:text-slate-300/30' onClick={() => setDropdown(false)}>Immigration Services</span></a>
                  :
                  <Link to="/"><span className='m-6 hover:text-slate-300/30' onClick={() => setDropdown(false)}>Immigration Services</span></Link>
                }
              </li>
              <li className='w-full h-2 bg-slate-300/30'></li>
              <li>
                {!home ?
                  <a href="#multimediaservice"><span className='m-6 hover:text-slate-300/30' onClick={() => setDropdown(false)}>Multimedia Services</span></a>
                  :
                  <Link to="/"><span className='m-6 hover:text-slate-300/30' onClick={() => setDropdown(false)}>Multimedia Services</span></Link>
                }
            </li>
          </ul>
          </span>
        </li>
        <li>
          {!home ?
            <a href="#contact"><span className='hover:text-slate-300 transition-all duration-300 cursor-pointer' onClick={() => setDropdown(false)}>Contact</span></a>
            :
            <Link to="/"><span className='hover:text-slate-300 transition-all duration-300 cursor-pointer' onClick={() => setDropdown(false)}>Contact</span></Link>
          }
        </li>
      </ul>
      {/* toggler */}
      <div className='my-auto ml-auto float-right lg:hidden cursor-pointer' >
        <div className="w-8 h-1 bg-white rounded-full 
        after:w-8 after:h-1 after:content-[''] after:bg-white after:absolute after:-mt-2 after:rounded-full
        before:w-8 before:h-1 before:content-[''] before:bg-white before:absolute before:mt-2 before:rounded-full
        cursor-pointer
        "
        onClick={mobileHandler}
        ></div>
      </div>
      <div>

      </div>
    </div>
    )
}

export default Navbar
