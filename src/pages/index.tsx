'use client';

import Image from 'next/image';
import { useState } from 'react';
import logo from '@/public/logoSurfCode.jpg';

const navigation = [
    { name: 'Home', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Contact', href: '#' },
];

const features = [
    {
        name: 'Seamless Deployment',
        description: 'Deploy applications with ease and confidence.',
    },
    {
        name: 'Advanced Security',
        description: 'Keep your data safe with top-notch security measures.',
    },
    {
        name: 'Dynamic Scaling',
        description: 'Scale your applications dynamically with our tools.',
    },
    {
        name: 'Custom Integrations',
        description:
            'Integrate with various platforms and services effortlessly.',
    },
    {
        name: 'Robust API',
        description: 'Leverage a powerful API for your needs.',
    },
    {
        name: 'Reliable Backups',
        description: 'Ensure your data is always backed up and recoverable.',
    },
];

const tiers = [
    {
        name: 'Starter',
        id: 'tier-starter',
        href: '#',
        priceMonthly: '$29',
        description: 'Ideal for individuals and small teams.',
        features: [
            '10 projects',
            '5,000 subscribers',
            'Basic analytics',
            'Email support',
        ],
        featured: false,
    },
    {
        name: 'Professional',
        id: 'tier-professional',
        href: '#',
        priceMonthly: '$99',
        description: 'Advanced features for growing businesses.',
        features: [
            'Unlimited projects',
            'Unlimited subscribers',
            'Advanced analytics',
            '24/7 support',
            'Custom integrations',
            'Priority support',
        ],
        featured: true,
    },
];

const faqs = [
    {
        question: 'How does surfCode ensure data security?',
        answer: 'We use state-of-the-art encryption and security protocols to protect your data at all times.',
    },
    // More questions...
];

function classNames(...classes: (string | undefined | null)[]): string {
    return classes.filter(Boolean).join(' ');
}

export default function SurfCodeLandingPage() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    console.log(mobileMenuOpen);
    return (
        <div className='bg-gray-900 text-white'>
            {/* Header */}
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

            <main>
                {/* Hero section */}
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

                {/* Features section */}
                <div className='relative isolate overflow-hidden bg-gray-900 px-6 pt-20 pb-32 sm:pb-48'>
                    <div
                        aria-hidden='true'
                        className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-40rem)]'
                    >
                        <svg
                            className='relative left-[calc(50%-3rem)] -z-10 max-w-none -translate-x-1/2 rotate-[30deg] -scale-x-[-1] text-gray-900 opacity-10'
                            viewBox='0 0 1155 678'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                fill='url(#07ef07c5-fd6c-4a27-bfd6-9c8aa82b0e90)'
                                fillOpacity='.3'
                                d='M317.16 330.58L225.1 473.07 94.95 297.4 317.16 330.58z'
                            />
                            <defs>
                                <linearGradient
                                    id='07ef07c5-fd6c-4a27-bfd6-9c8aa82b0e90'
                                    x1='0'
                                    x2='1'
                                >
                                    <stop offset='0%' stopColor='#00bcd4' />
                                    <stop offset='100%' stopColor='#00796b' />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className='mx-auto max-w-3xl text-center'>
                        <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
                            Key Features
                        </h2>
                        <p className='mt-2 text-lg leading-8 text-gray-400'>
                            Discover the unique features that set surfCode apart
                            from the rest. From advanced security to dynamic
                            scaling, weve got you covered.
                        </p>
                        <div className='mt-8 max-w-lg sm:mx-auto'>
                            <div className='grid max-w-lg grid-cols-1 gap-y-16 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-16'>
                                {features.map((feature) => (
                                    <div
                                        key={feature.name}
                                        className='relative flex flex-col gap-6 sm:flex-row'
                                    >
                                        <div className='sm:min-w-0 sm:flex-1'>
                                            <p className='text-base font-semibold leading-7 text-teal-400'>
                                                {feature.name}
                                            </p>
                                            <p className='mt-2 text-base leading-6 text-gray-300'>
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pricing section */}
                <div className='bg-gray-800 py-24 sm:py-32'>
                    <div className='mx-auto max-w-3xl text-center'>
                        <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
                            Pricing
                        </h2>
                        <p className='mt-2 text-lg leading-8 text-gray-400'>
                            Choose a plan that fits your needs. Our pricing is
                            transparent and designed to scale with you.
                        </p>
                        <div className='mt-16 grid gap-y-16 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-16'>
                            {tiers.map((tier) => (
                                <div
                                    key={tier.name}
                                    className={classNames(
                                        'relative flex flex-col gap-6 rounded-3xl p-8 ring-1 ring-gray-700/10',
                                        tier.featured
                                            ? 'bg-gray-900 ring-2 ring-teal-400'
                                            : 'bg-gray-800'
                                    )}
                                >
                                    <div className='flex items-center justify-between'>
                                        <div className='text-lg font-semibold leading-6 text-gray-100'>
                                            {tier.name}
                                        </div>
                                        <div className='text-lg font-semibold leading-6 text-gray-300'>
                                            {tier.priceMonthly}
                                        </div>
                                    </div>
                                    <p className='text-base leading-6 text-gray-400'>
                                        {tier.description}
                                    </p>
                                    <ul
                                        role='list'
                                        className='space-y-4 text-sm text-gray-300'
                                    >
                                        {tier.features.map((feature) => (
                                            <li
                                                key={feature}
                                                className='relative flex gap-x-3'
                                            >
                                                <svg
                                                    viewBox='0 0 16 16'
                                                    fill='none'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    className='h-6 w-6 flex-shrink-0 text-teal-400'
                                                >
                                                    <path
                                                        d='M7.293 10.293a1 1 0 0 0 1.414 0L11 8.414 12.707 10.121a1 1 0 0 0 1.415-1.414L9.414 6.586a1 1 0 0 0-1.414 0L5.293 8.707a1 1 0 0 0 0 1.414z'
                                                        fill='currentColor'
                                                    />
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <a
                                        href={tier.href}
                                        className='inline-block rounded-lg px-3.5 py-1.5 text-base font-semibold leading-6 text-gray-900 ring-1 ring-gray-700 hover:ring-gray-500'
                                    >
                                        Get Started
                                        <span
                                            aria-hidden='true'
                                            className='text-teal-400'
                                        />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* FAQ section */}
                <div className='bg-gray-900 py-24 sm:py-32'>
                    <div className='mx-auto max-w-3xl text-center'>
                        <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
                            Frequently Asked Questions
                        </h2>
                        <div className='mt-16'>
                            <dl className='space-y-12'>
                                {faqs.map((faq) => (
                                    <div
                                        key={faq.question}
                                        className='relative'
                                    >
                                        <dt className='text-lg font-semibold leading-6 text-white'>
                                            {faq.question}
                                        </dt>
                                        <dd className='mt-2 text-base leading-6 text-gray-400'>
                                            {faq.answer}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className='bg-gray-900 py-8'>
                <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                    <div className='border-t border-gray-700 pt-8'>
                        <div className='text-center text-gray-400'>
                            <p>&copy; 2024 surfCode. All rights reserved.</p>
                            <p>
                                <a
                                    href='#'
                                    className='text-teal-400 hover:underline'
                                >
                                    Privacy Policy
                                </a>{' '}
                                |{' '}
                                <a
                                    href='#'
                                    className='text-teal-400 hover:underline'
                                >
                                    Terms of Service
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
