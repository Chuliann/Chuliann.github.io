import { ClipboardDocumentCheckIcon, CodeBracketIcon, CogIcon } from '@heroicons/react/24/solid'

const Services = () => {
    return ( 
        <div className="p-2 pt-9 md:pt-20 w-full montserrat">
            <h1 className="text-center text-3xl font-bold uppercase">Servicios</h1>

            {/* Servicios */}
            <div className="py-20 md:pt-10 gap-44 md:gap-10 flex-col flex md:flex-row justify-center items-center w-full md:w-5/6  m-auto">

                {/* Servicio Desarrollo Web Completo */}
                <div data-aos="fade-right" className="service flex flex-col items-center gap-2 text-center">
                    <CodeBracketIcon className='h-14 w-14' />
                    <h2 className='text-xl font-bold'>
                        Desarrollo Web Completo
                    </h2>
                    <p>
                        Desde la creación de sitios web estáticos hasta aplicaciones web interactivas, 
                        ofrezco soluciones completas adaptadas a tus necesidades utilizando las últimas tecnologías.
                    </p>
                </div>

                {/* Servicio Auditorías */}
                <div data-aos="fade-up" className="service flex flex-col items-center gap-2 text-center">
                    <ClipboardDocumentCheckIcon className='h-14 w-14' />
                    <h2 className='text-xl font-bold'>
                        Auditorías de Código y Seguridad
                    </h2>
                    <p>
                        Revisión exhaustiva del código y evaluación de la seguridad para garantizar 
                        que tus proyectos sean robustos y estén libres de vulnerabilidades.
                    </p>
                </div>

                {/* Servicio Automatización de Procesos */}
                <div data-aos="fade-left" className="service flex flex-col items-center gap-2 text-center">
                    <CogIcon className='h-14 w-14' />
                    <h2 className='text-xl font-bold'>
                        Automatización de Procesos y Tareas
                    </h2>
                    <p>
                        Implementación de soluciones de automatización para optimizar tus procesos 
                        y ahorrar tiempo, incrementando así la eficiencia y productividad.
                    </p>
                </div>

            </div>
        </div>
     );
}
 
export default Services;