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

                        <div className="mt-12 space-y-8 text-lg leading-[1.9] text-gray-700">
                            <p>
                                Founded in 2025, SAF TECH has established itself as a premier software development and IT consulting firm. We specialize in creating innovative digital solutions that drive business transformation and growth.
                            </p>

                            <p>
                                Our team of{" "}
                                <strong className="text-blue-600">
                                    50+ certified developers
                                </strong>
                                , designers, and IT consultants have delivered
                                over{" "}500 successful projects.
                                <strong className="text-purple-600">
                                    100 successful projects
                                </strong>
                                 {" "}to clients across 15 countries. We combine
                                 technical expertise with industry insights to
                                 deliver measurable results.
                            </p>
                        </div>

                        {/* MISSION and VISION */}
                    </div>
                 </div>
             </div>

        </section>
    )
}