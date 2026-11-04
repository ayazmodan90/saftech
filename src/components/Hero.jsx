import Link from "next/link";
import { checkCirculer2, ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative flex min-h-[calc(100svh-72px)] items-center justify-center overflow-hidden bg-gradient-to-br from-[#edf3ff] via-[#e8efff] to-[#dfe8ff] px-5 py-16"
        >
            <div className="mx-auto w-full max-w-6xl text-center">
                {/* Badge */}

                <div className="mb-9 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-md">
                    Innovative IT Solutions

                    <checkCirculer2 size={21} fill="white" className="text-indigo-600" />
                </div>

                {/* Main Heading */}
                <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-[#111827] sm:text-7xl lg:text-[90px]">
                  <span className="block">
                    Transforming{" "}
                      <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        Digital
                      </span>  
                    </span>

                    <span className="block mt-1">
                        Experiences
                    </span>
                </h1>

                <p className="mx-auto mt-10 max-w-5xl text-lg leading-relaxed text-[#34445f] sm:text-xl md:text-[29px]">
                     We deliver cutting-edge digital solutions for startups,
                     enterprises, and businesses worldwide. Our expertise drives
                     innovation and growth.
                </p>

                <div className="mt-14 flex flex-col items-center justify-center gap-5 sm:flex-row">
                    <Link
                       href="#contact"
                       className="inline-flex min-w-[220px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-5 text-xl font-semibold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                       >
                        Get Started
                         <ArrowRight size={20} />
                    </Link>

                     <Link
                        href="#portfolio"
                        className="inline-flex min-w-[258px] items-center justify-center rounded-xl border border-blue-200 bg-white px-8 py-5 text-xl font-medium text-blue-600 shadow-md transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg"
                    >
                        View Our Work
                    </Link>
                </div>

                {/* Statistics Cards */}
                <div className="mt-24 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                        { value: "100+", label: "Projects Delivered" },
                        { value: "98%", label: "Client Satisfaction" },
                        { value: "10+", label: "Expert Team" },
                        { value: "1+", label: "Years Experience" },
                    ].map((stat)=> (
                        <div 
                           key={stat.label}
                           className="rounded-2xl border border-blue-100 bg-white/85 px-9 py-8 text-left shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >
                            <h2 className="text-4xl font-extrabold text-blue-600 sm:text-5xl">
                               {stat.value}
                            </h2>

                            <p className="mt-4 text-lg font-medium text-gray-600">
                               {stat.label}
                            </p>
                        </div>
                    ))}
               </div>

            </div>
        </section>
    )
}