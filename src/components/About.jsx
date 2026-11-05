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

                        <div className="mt-16 grid gap-10 sm:grid-cols-2">
                            <div className="flex items-start gap-5">
                                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-lg">
                                    <Zap size={30} />
                                </div>
                                <div>
                                     <h3 className="text-2xl font-bold text-gray-900">
                                        Our Mission
                                    </h3>

                                     <p className="mt-3 leading-7 text-gray-600">
                                        Empower businesses through innovative technology solutions that solve real-world challenges
                                     </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5">
                                 <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 text-white shadow-lg">
                                     <Eye size={30} />
                                 </div>

                                 <div>
                                    <h3 className="text-2xl font-bold text-gray-900">
                                        Our Vision
                                    </h3>

                                    <p className="mt-3 leading-7 text-gray-600">
                                        Become the most trusted technology partner for businesses worldwide
                                    </p>
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}