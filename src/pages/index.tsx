'use client';

import Header from '../components/header';

export default function SurfCodeLandingPage() {
    return (
        <div className='bg-gray-900 text-white'>
            {/* Header */}
            <Header />

            <main>
                <div className='relative isolate overflow-hidden bg-black pb-16 pt-14 sm:pb-20'>
                    <div
                        aria-hidden='true'
                        className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
                    >
                        <div
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                            className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#00bcd4] to-[#00796b] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
                        />
                    </div>
                    <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                        <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
                            <div className='hidden sm:mb-8 sm:flex sm:justify-center'>
                                <div className='relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-gray-700 hover:ring-gray-500'>
                                    Check out our latest features!{' '}
                                    <a
                                        href='#'
                                        className='font-semibold text-white'
                                    >
                                        <span
                                            aria-hidden='true'
                                            className='absolute inset-0'
                                        />
                                        Learn more{' '}
                                        <span aria-hidden='true'>&rarr;</span>
                                    </a>
                                </div>
                            </div>
                            <div className='text-center'>
                                <h1 className='text-4xl font-bold tracking-tight sm:text-6xl'>
                                    Welcome to{' '}
                                    <span className='text-teal-400'>
                                        surfCode
                                    </span>
                                </h1>
                                <p className='mt-6 text-lg leading-8 text-gray-300'>
                                    Empower your development with cutting-edge
                                    tools and features. Create, manage, and
                                    scale your applications effortlessly with
                                    surfCode.
                                </p>
                                <div className='mt-8 flex gap-x-4 justify-center'>
                                    <a
                                        href='#'
                                        className='inline-block rounded-lg px-3.5 py-1.5 text-base font-semibold leading-6 text-gray-900 ring-1 ring-gray-700 hover:ring-gray-500'
                                    >
                                        Get Started
                                        <span
                                            aria-hidden='true'
                                            className='text-teal-400'
                                        />
                                    </a>
                                    <a
                                        href='#'
                                        className='inline-block rounded-lg px-3.5 py-1.5 text-base font-semibold leading-6 text-gray-900 ring-1 ring-gray-700 hover:ring-gray-500'
                                    >
                                        Contact Us
                                        <span
                                            aria-hidden='true'
                                            className='text-teal-400'
                                        />
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </main>

        </div>
    );
}
