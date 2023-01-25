import SearchIcon from './LeftSideAssets/SearchIcon.svg';
import Logo from './LeftSideAssets/Logo.svg';
import { Link } from 'react-router-dom';
function StudentLeftSide({ setShowSidebar }) {
    return <nav
        className={`flex justify-between md:justify-around items-center w-full lg:w-auto 
                    ml-0  xl:ml-10  2xl:ml-36 
                    py-2 pt-3 md:py-0
                    px-5
                    gap-0 sm:gap-10 lg:gap-10 xl:gap-10 2xl:gap-16`
        }
    >

        <img src={require("./LeftSideAssets/HamburgerIcon.svg").default}
            onClick={() => setShowSidebar(true)}
            className=' lg:hidden mx-2'
            alt="" />
        <Link to='/'>

            <picture className='flex justify-center items-center'>
                <source media="(max-width:1023px)" srcSet={require("./LeftSideAssets/SmallScreenlogo.svg").default} />
                <source media="(min-width:1024px)" srcSet={Logo} />
                <img
                    className="w-[150px] sm:w-[300px] lg:w-[275px] xl:w-auto"
                    alt="Logo"
                    id="Logo"
                    src={Logo}
                />
            </picture>
        </Link>

        <img
            className="cursor-pointer mx-1 mr-2 sm:mr-4 xl:mx-7 text-xs "
            alt="SearchIcon"
            id="SearchIcon"
            src={SearchIcon}
        />
    </nav>
}


export default StudentLeftSide