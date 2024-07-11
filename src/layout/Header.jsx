import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { UserIcon, WrenchScrewdriverIcon, PaperClipIcon } from '@heroicons/react/24/solid'

const Header = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const isHome = location.pathname === '/';

    
    const goTo = (route) => {
        navigate(route)
    }

    return ( 
        <div className="relative">

            {/* Header */}
            <header 
                className={`${isHome ? "fixed" : ""} z-50 header w-full md:absolute top-0 flex justify-center items-center`}
            >
                

                {!isHome && 
                    <button onClick={() => goTo("/")} className="btn btn_link initials p-2 text-xl md:text-2xl">JB</button>
                }

                <nav className="nav flex gap-2 rounded-3xl px-1 mt-1 z-50">
                    <button 
                        className={`btn btn_link ${location.pathname === '/services' ? 'active' : ''}`}
                        onClick={() => goTo("/services")}
                    > <WrenchScrewdriverIcon className="w-7 h-7" /> </button>

                    <button 
                        className={`btn btn_link ${location.pathname === '/proyects' ? 'active' : ''}`}
                        onClick={() => goTo("/proyects")}
                        > <PaperClipIcon className="w-7 h-7" /> </button>

                    <button 
                        className={`btn btn_link ${location.pathname === '/about-me' ? 'active' : ''}`}
                        onClick={() => goTo("/about-me")}
                    > <UserIcon className="w-7 h-7"/> </button>
                </nav>
                
            </header>

            <main className="">
                <Outlet />
            </main>

            <footer className="w-full flex justify-end">
                {/* Version */}
                <div className={`${isHome ? "hidden" : ""} montserrat p-1`}>
                    <p>v0.3.5</p>
                </div>
            </footer>
        </div>
     );
}
 
export default Header;