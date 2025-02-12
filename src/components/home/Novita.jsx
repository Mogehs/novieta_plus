import dot from '../../assets/HomeImg/dot.svg'
import work from '../../assets/HomeImg/work.mp4'
import rectangle from '../../assets/HomeImg/rectangle.png'
export default function Novita() {
    return (
        <div className=" h-fit relative mt-23">
            {/* doted */}
            <img src={dot} alt="missing dotted" className=" absolute top-0 left-0 w-1/2 sm:w-1/4" />
            <img src={rectangle} alt="missing dotted" className=" absolute hidden sm:visible top-0 right-4 -z-10 w-1/2 sm:w-1/3" />



      <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* content */}

        <div className=" w-full sm:w-[80%] h-auto p-10">
          <h4 className=" text-xs font-semibold">
            Prioritize impactful tasks that drive the most value.
          </h4>
          <h1 className="  tex-xl sm:text-5xl font-semibold">
            Novieta Plus-Integrated Advertising and Marketing Solutions
          </h1>
          <p className=" mt-2 ">
            Novieta Plus delivers innovative and comprehensive advertising
            solutions. We focus on providing high-quality marketing services
            that help build a strong brand identity, enhance visibility, and
            increase engagement with the target audience across multiple
            channels.
          </p>
        </div>

        {/* image */}

                <div className="w-full sm:w-[70%] pr-2.5 flex justify-center items-center">
                    <video
                        src={work}
                        autoPlay
                        muted
                        loop
                        className="w-[300px] h-[200px] sm:w-[100%] sm:h-[70%] object-cover"
                    />
                </div>

            </div>







        </div>
    )
}
