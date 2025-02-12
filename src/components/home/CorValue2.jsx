import value2 from '../../assets/HomeImg/value2.png'

export default function CorValue2() {
    const core = [
        {
            description: "We are dedicated to delivering exceptional outcomes that surpass client expectations through innovation, precision, and expertise."
        },
        {
            description: "Our team ensures every project is executed with excellence, focusing on quality, efficiency, and client satisfaction."
        },
        {
            description: "With a results-driven approach, we prioritize client goals, offering tailored solutions that drive long-term success."
        },
        {
            description: "By combining creativity and strategy, we transform ideas into impactful digital solutions across multiple platforms."
        }
    ]
    
    return (
        <div>
            <div className="h-fit sm:mt-10">
                <div className='w-full mx-auto sm:w-[90%] flex lg:flex-row flex-col gap-4'>

                    {/* Core Values */}
                    <div className='sm:w-[100%] w-full p-10 order-2 lg:order-1'>
                        <p className='redText'>Achieving results that exceed client expectations</p>
                        <h1 className='text-3xl font-semibold'>Commitment</h1>
                        {
                            core.map((item, index) => (
                                <div key={index} className='py-2'>
                                    <ul className='flex gap-2 items-start '>
                                        <p>☼</p>
                                        <li>
                                             {item.description}
                                        </li>
                                    </ul>
                                </div>
                            ))
                        }
                    </div>

                    {/* Image */}
                    <div className="sm:w-[100%] w-full h-auto order-1 lg:order-2 ">
                        <img
                            src={value2}
                            alt="Access"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}
