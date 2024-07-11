import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { UserIcon, WrenchScrewdriverIcon, PaperClipIcon } from '@heroicons/react/24/solid'

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"


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

                <nav className="nav flex gap-2 rounded-3xl px-2 lg:px-2 mt-1 z-50">

                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger
                                className={`btn btn_link ${location.pathname === '/services' ? 'active' : ''}`}
                                onClick={() => goTo("/services")}
                            >
                                <WrenchScrewdriverIcon className="w-8 h-8" /> 
                                <p className="">Servicios</p>
                            </TooltipTrigger>
                            <TooltipContent className="hidden lg:block border border-slate-900">
                                <p>Servicios</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    

                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger
                                className={`btn btn_link ${location.pathname === '/proyects' ? 'active' : ''}`}
                                onClick={() => goTo("/proyects")}
                            >
                                <PaperClipIcon className="w-8 h-8" /> 
                                <p>Proyectos</p>
                            </TooltipTrigger>
                            <TooltipContent className="hidden lg:block border border-slate-900">
                                <p>Proyectos</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger
                                className={`btn btn_link ${location.pathname === '/about-me' ? 'active' : ''}`}
                                onClick={() => goTo("/about-me")}
                            >
                                <UserIcon className="w-8 h-8" /> 
                                <p>Sobre mi</p>
                            </TooltipTrigger>
                            <TooltipContent className="hidden lg:block border border-slate-900">
                                <p>Sobre mi</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
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