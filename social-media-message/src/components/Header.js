import React from 'react'

export default function Header() {
    return (
        <header className='bg-[#ff4a17] sticky top-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full py-3 md:py-0'>
            <nav className='max-w-[90rem] w-full mx-auto px-4 md:px-6 lg:px-8'>
                <div className='relative flex items-center h-[100px] justify-center md:justify-between'>
                    <a className="winbings" alt="Winbings - A Leading Software Development Company " target="_blank" href="https://www.winbings.com/"><h1 className='text-white text-xl font-bold' style={{ fontSize: 52 }}>Winbings</h1></a>
                    <div className='hidden md:block text-[#14212b] font-bold'>
                        <a target="_blank" href="https://www.winbings.com/about"><span className='px-[6px] mx-[5px] cursor-pointer hover:text-white'>About Us</span></a>
                        <a target="_blank" href='https://www.winbings.com/services'><span className='px-[6px] mx-[5px] cursor-pointer hover:text-white'>Services</span></a>
                        <a target="_blank" href='https://www.winbings.com/team'><span className='px-[6px] mx-[5px] cursor-pointer hover:text-white'>Our Team</span></a>
                        <a target="_blank" href='https://www.winbings.com/faq'><span className='px-[6px] mx-[5px] cursor-pointer hover:text-white'>FAQ</span></a>

                    </div>
                </div>
            </nav>
            {/* <div className='ml-15'>WinBings</div>
            <div>

            </div> */}
        </header>
    )
}
