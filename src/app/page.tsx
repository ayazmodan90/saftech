import Navbar from "../components/Navbar";

export default function Home(){
  return (
    <>
        <Navbar />

      <main>
        <section
          id="home"
          className="flex min-h-[70vh] items-center justify-center bg-gray-100"
          >
            <h1 className="text-4xl font-bold text-gray-900"
            >
              SAF TECH Website
            </h1>

        </section>
      </main>
    </>

    
  )
}

