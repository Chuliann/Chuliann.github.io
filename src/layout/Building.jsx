import { Cog8ToothIcon } from '@heroicons/react/24/solid'

const Building = () => {
    return ( 
        <div className="flex justify-center items-center h-screen -mb-10">
            <div className="flex flex-col justify-center items-center">
                <Cog8ToothIcon className='h-32 w-32 spin' />
                <p className='text-2xl font-bold'>
                Construyendo<span className="dots"></span>
                </p>
                {/* <p className='text-2xl font-bold'>
                    Construyendo<span className="dot1">.</span><span className="dot2">.</span><span className="dot3">.</span>
                </p> */}
                <h1 className='text-dorado-1 text-3xl font-bold'>COMING SOON</h1>
            </div>
        </div>
     );
}
 
export default Building;