import React, { useState } from "react";

function Home() {

    const [bodyMobileScreen, setBodyMobileScreen] = useState(false);
    return (
        <div>
            <section className="bg-gradient-to-br from-purple-700 via-indigo-800  to-purple-700 text-white h-auto py-12 p-13 ">
                <h1 className="text-5xl text-center font-bold">Connect with <span className="text-purple-300"> Campus Services</span>
                </h1>

                <p className="text-2xl text-center mt-9 mb-9">Find tutoring, tech support, creative services, and more from fellow students on campus.
                    Quality services at student-friendly prices. </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                    <button className="bg-gradient-to-r from bg-purple-500 via-pink-400px to-pink-500 text-center px-6 py-3 m-3 rounded-2xl text-lg font-semibold shadow-md hover:scale-105 transition-transform">
                        Browse Services </button>
                    <button className="border text-center px-6 py-3 m-3 rounded-2xl text-lg font-semibold shadow-md transition-transform hover:scale-105 hover:bg-purple-200 hover:text-purple-600">
                        View All Providers
                    </button>
                </div>
            </section>


            <section>

            </section>
            <section>

            </section>

            <footer>

            </footer>
        </div>
    )
}
export default Home; 