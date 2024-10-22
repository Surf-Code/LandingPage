import Image from "next/image"
import logo from '@/public/logoWhite.svg';
import { useState } from "react";

const Header = () => {

    const navigation = [
        { name: 'Home', href: '#' },
        { name: 'Features', href: '#' },
        { name: 'Pricing', href: '#' },
        { name: 'Contact', href: '#' },
    ];

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    console.log(mobileMenuOpen);
    return (
        <header className='absolute inset-x-0 top-0 z-50'>
            <nav
                aria-label='Global'
                className='flex items-center justify-between p-6 lg:px-8'
            >
                <div className='flex lg:flex-1'>
                    <a href='#' className='-m-1.5 p-1.5'>
                        <Image
                            alt='Logo'
                            src={logo}
                            width={100}
                            height={100}
                        />
                        <span className='sr-only'>surfCode</span>
                    </a>
                </div>
                <div className='flex lg:hidden'>
                    <button
                        type='button'
                        onClick={() => setMobileMenuOpen(true)}
                        className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400'
                    >
                        <span className='sr-only'>Open main menu</span>
                    </button>
                </div>
                <div className='hidden lg:flex lg:gap-x-12'>
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className='text-sm font-semibold leading-6 text-white'
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
                <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
                    <a
                        href='#'
                        className='text-sm font-semibold leading-6 text-white'
                    >
                        Log in <span aria-hidden='true'>&rarr;</span>
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Header