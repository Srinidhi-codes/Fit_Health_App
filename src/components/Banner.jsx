import React from 'react'
import { Link } from 'react-router-dom'

export const Banner = () => {
    return (
        <>
            <div
                className="w-full bg-skin-second flex bg-[url(https://images.unsplash.com/photo-1643780668909-580822430155?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80)] bg-blend-overlay bg-cover bg-center bg-no-repeat"
            >
                <div
                    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                ></div>

                <div
                    className="relative mx-auto px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                        <h1 className="text-3xl text-skin-text font-extrabold sm:text-5xl">
                            Let us find your

                            <strong className="block font-extrabold text-cyan-400"> Forever Cure. </strong>
                        </h1>

                        <p className="mt-4 max-w-lg sm:text-xl/relaxed text-skin-text">
                            Unlock Your Best Self with FitHealth! Transform Your Lifestyle, Transform Your Life. Discover Wellness, Embrace Fitness.
                            Your Journey to a Healthier You Starts Here!Elevate Your Well-Being with FitHealth.
                            Be Fit. Be Healthy. Be You with FitHealth!!
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4 text-center justify-center items-center">
                            <Link
                                to="/form"
                                className="block w-full rounded-full bg-cyan-400 px-12 py-6 text-xl font-medium text-black shadow hover:bg-cyan-500 focus:outline-none focus:ring active:bg-skin-base sm:w-auto"
                            >
                                Book Now
                            </Link>

                            <div
                                href="/"
                                className="block w-full rounded-full bg-skin-base px-12 py-6 text-xl font-medium text-skin-text shadow focus:outline-none focus:ring sm:w-auto"
                            >
                                Learn More
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
