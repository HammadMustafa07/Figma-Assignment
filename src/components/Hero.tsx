import Image from "next/image"
import image from "../../public/image.png"

export default function Hero() {
    return (
        <div className="h-[600px] w-[1440px] bg-[#faf5f5]">
            <div className="h-[308px] w-[1030px] ml-[231px] relative top-[80px] flex justify-between">
                <div className="h-full w-[305px]">
                    <p className="text-[48px] text-[#21243D]">Hi, I am John,
                    Creative Technologist</p>
                    <p className="text-[#21243D]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    <button className="h-[50px] w-[205px] bg-[#F98585] text-white text-[18px] mt-[40px] rounded-[2px] flex justify-center items-center">Download Resume</button>
                </div>
                <div className="box-image h-[308px] w-[298px] ">
                    <Image className="image" src={image} alt="image" height={299} width={292}></Image>
                </div>
            </div>
        </div>
    )
}