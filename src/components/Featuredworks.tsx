import Image from "next/image"
import featureimage1 from "../../public/featureimage1.png";
import featureimage2 from "../../public/featureimage2.png";
import featureimage3 from "../../public/featureimage3.png";


export default function Featuredworks() {
    return (
        <div className="h-[1134px] w-[1440px] bg-[#f4f4f5] flex justify-center ">
            <div className="relative top-[120px] h-[934.2px]  w-[919px]">
                <p className="text-[22px] text-black">Featured works</p>
                <div className="h-[180px] w-[929px]  relative top-[40px] flex gap-[20px]">
                    <Image src={featureimage1} alt="featureimage" height={180} width={246}></Image>
                    <div className="w-[653px] h-[full]  flex flex-col">
                        <p className="text-[30px] relative top-[-5px]">Designing Dashboards</p>
                        <div className="h-[37px] w-[300px]  flex  items-center gap-[65px]">
                            <div className="h-[24px] w-[45px] relative rounded-[25px] left-[20px] bg-red-400 flex justify-center items-center">
                                <p className="text-[14px] text-white">2020</p>
                            </div>
                            <p className="text-[20px] text-[#0000009E]">Dashboard</p>
                        </div>
                        <p className="text-[18px] text-[#000000] relative top-[15px]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </div>
                <div className="h-[180px] w-[929px]  relative top-[140px] flex gap-[20px]">
                    <Image src={featureimage2} alt="featureimage" height={180} width={246}></Image>
                    <div className="w-[653px] h-[full]  flex flex-col">
                        <p className="text-[30px] relative top-[-5px]">Designing Dashboards</p>
                        <div className="h-[37px] w-[300px]  flex  items-center gap-[65px]">
                            <div className="h-[24px] w-[45px] relative rounded-[25px] left-[20px] bg-red-400 flex justify-center items-center">
                                <p className="text-[14px] text-white">2020</p>
                            </div>
                            <p className="text-[20px] text-[#0000009E]">Dashboard</p>
                        </div>
                        <p className="text-[18px] text-[#000000] relative top-[15px]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </div>
                <div className="h-[180px] w-[929px]  relative top-[240px] flex gap-[20px]">
                    <Image src={featureimage3} alt="featureimage" height={180} width={246}></Image>
                    <div className="w-[653px] h-[full]  flex flex-col">
                        <p className="text-[30px] relative top-[-5px]">Designing Dashboards</p>
                        <div className="h-[37px] w-[300px]  flex  items-center gap-[65px]">
                            <div className="h-[24px] w-[45px] relative rounded-[25px] left-[20px] bg-red-400 flex justify-center items-center">
                                <p className="text-[14px] text-white">2020</p>
                            </div>
                            <p className="text-[20px] text-[#0000009E]">Dashboard</p>
                        </div>
                        <p className="text-[18px] text-[#000000] relative top-[15px]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </div>
            </div>
        </div>
    )
} 