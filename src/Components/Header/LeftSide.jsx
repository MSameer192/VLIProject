import SearchIcon from './Assessts/SearchIcon.svg';
import Logo from './Assessts/Logo.svg';
function HeaderLeftSide({ setShowSidebar }) {
    return <nav
        className={`flex justify-between md:justify-around items-center w-full lg:w-auto 
                    ml-0  xl:ml-10  2xl:ml-36 py-2 pt-3 md:py-0
                    gap-0 sm:gap-10 lg:gap-10 xl:gap-10 2xl:gap-16`
        }
    >
        <img src={require("./Assessts/HamburgerIcon.svg").default}
            onClick={() => setShowSidebar(true)}
            className=' lg:hidden mx-2'
            alt="" />
        <picture className='flex justify-center items-center'>
            <source media="(max-width:1023px)" srcset={require("./Assessts/SmallScreenlogo.svg").default} />
            <source media="(min-width:1024px)" srcset={Logo} />
            <img
                className="w-[150px] sm:w-[300px] lg:w-[275px] xl:w-auto"
                alt="Logo"
                id="Logo"
                src={Logo}
            />
        </picture>

        <img
            className="cursor-pointer mx-1 mr-2 sm:mr-4 xl:mx-7 text-xs "
            alt="SearchIcon"
            id="SearchIcon"
            src={SearchIcon}
        />
    </nav>
}


export default HeaderLeftSide