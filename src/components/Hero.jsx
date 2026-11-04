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
            </div>
        </section>
    )
}