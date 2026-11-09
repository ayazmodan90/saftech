import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main id="home" className="min-h-screen">
      <Navbar />

      <section className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#eff6ff] via-[#eaf1ff] to-[#dce5ff]">
        <div className="px-5 text-center">
          <h1 className="text-5xl font-bold text-slate-900 md:text-7xl">
            SAF TECH
          </h1>

          <p className="mt-5 text-lg text-slate-600">
            Innovative IT Solutions
          </p>
        </div>
      </section>
    </main>
  );
}