import hero from "../assets/techhero1.png"


const Home = () => {
    return ( 
        <div className="relative">

            {/* Version */}
            <div className={`absolute right-1 bottom-1 montserrat p-1`}>
                <p>v0.3</p>
            </div>

            {/* Inicio */}
            <div className="h-screen flex flex-col md:flex-row relative items-center justify-center gap-16 px-2 md:px-0 py-10 md:py-20 overflow-hidden">
                {/* Imagen */}
                <div className="w-[500px] md:w-1/2">
                    <img className="object-cover w-100 h-100 -translate-x-40 md:-translate-x-0" src={hero} />
                    <div className="hero_overlay"></div>
                </div>

                {/* Titulo */}
                <div /* data-aos={"zoom-in-left"} */ className="object-cover self-end flex flex-col ml-auto md:mr-10  relative text-right gap-1 golden_circle_home">
                    <h2 className="text-4xl montserrat m-0"> Desarrollador Web</h2>
                    <div className="golden-bar flex flex-col gap-2 z-demasiado">
                        <h1 className="text-4xl font-bold montserrat uppercase m-0" >Julian Berton</h1> 
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Home;