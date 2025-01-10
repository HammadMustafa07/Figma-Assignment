

export default function Footer() {
    return (
        <div className="h-[243px] w-[1440px] bg-[#f4f4f5] flex flex-col justify-center items-center gap-[20px]">
            <div className="h-[30px] w-[279px] flex justify-evenly  items-center">
            <i className="i bi bi-facebook"></i>
            <i className="i bi bi-instagram"></i>
            <i className="i bi bi-twitter"></i>
            <i className="i bi bi-linkedin"></i>
            </div>
            <p className="text-[22px] text-[#000000]">
                Copyright ©2020 All rights reserved
            </p>
        </div>
    )
}