import acess from '../../assets/HomeImg/acess.webp'
export default function CoreValue1() {
    const core = [
        {
            description: "Seamlessly access all your apps, documents, and information with a single login, enhancing productivity and convenience."
        },
        {         
            description: "Maximize security by customizing access conditions based on devices, networks, locations, and more, ensuring a safe digital environment."
        },
        {
            description: "We offer seamless accessibility and optimized workflows without compromising security, enabling a smooth digital experience."
        },
        {
            description: "Providing innovative ideas and unique solutions to drive digital transformation and excellence."
        }
    ]
    return (
        <div className=" h-fit sm:mt-10">

            <div className='w-full mx-auto sm:w-[90%] grid grid-cols-1  lg:grid-cols-2 gap-4'>

                {/* image */}
                <div className="sm:w-[80%]  w-full h-auto">
                    <img
                        src={acess}
                        alt="Access"
                        className="w-full h-auto object-cover"
                    />
                </div>

                {/* core value */}
                <div className=' sm:w-[100%] w-full p-10'>
                    <p className=' redText'>Providing innovative ideas and unique solutions</p>
                    <h1 className=' text-3xl font-semibold'>Creativity</h1>
                    {
                        core.map((item, index) => (
                            <div key={index} className='py-2'>
                                <ul className=' flex gap-2 items-start '>
                                    <p>☼</p>
                                    <li> {item.description}</li>
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
