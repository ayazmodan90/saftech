import Link from "net/link";
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

            </div>
        </section>
    )
}