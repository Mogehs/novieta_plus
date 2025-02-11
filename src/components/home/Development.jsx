import cloud from '../../assets/HomeImg/cloud.webp'
export default function Development() {
    return (
        <div className=" h-fit sm:mt-10">
            <div className=" w-[100%] sm:w-[60%] py-2 mx-auto">
                <p className=" text-center text-xs sm:text-xl redText mb-2">Keeping up with the latest trends and technologies to ensure leadership</p>
                <h1 className=" text-center text-xl sm:text-4xl font-semibold">Developments</h1>
                <div className=" mt-2 px-2 text-center">
                    <p> We are committed to continuous innovation, embracing the latest advancements to redefine digital experiences.Our goal is to develop transformative solutions that enhance efficiency, scalability, and long-term success,ensuring businesses stay competitive in a rapidly evolving digital world.</p>
                </div>

                <div className=" w-[100%] sm:w-[100%] mx-auto ">
                    <img src={cloud} alt="" />
                </div>
            </div>
        </div>
    )
}
