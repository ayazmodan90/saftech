import {
  Globe2,
  BriefcaseBusiness,
  Zap,
  Eye,
} from "lucide-react";

export default function about(){
    return (
        <section
            id="about"
            className="overflow-hidden bg-gradient-to-br from-[#eff5ff] via-[#edf3ff] to-[#e9efff] px-5 py-24 lg:px-8"
        >
             <div className="mx-auto max-w-7xl">
                 <div className="grid items-center gap-16 lg:grid-cols-2">
                    {/* LEFT CONTENT */}

                    <div>
                        <span className="inline-flex rounded-full bg-blue-100 px-6 py-2 text-sm font-semibold tracking-wide text-blue-700">
                            WHO WE ARE
                        </span>

                        <h2 className="mt-6 text-5xl font-extrabold tracking-tight sm:text-6xl">
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                About SAF TECH
                            </span>
                        </h2>
                    </div>
                 </div>
             </div>

        </section>
    )
}