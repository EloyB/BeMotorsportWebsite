import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="h-screen w-full md:h-screen">
        <img
          className="h-1/2 w-auto object-cover sm:h-2/3 md:h-3/4 lg:w-full lg:h-screen"
          src="/small-banner.jpg"
          alt="small banner"
        />
        <div className="px-8 pt-8">
          <h1 className="text-3xl font-medium text-center py-5">Create your business experience</h1>
        </div>
        <div className="m-auto py-10 px-8 space-y-5 grid grid-cols-1 sm:space-y-0 sm:grid-cols-2 lg:grid-cols-4 sm:gap-5 lg:max-w-screen-lg lg:px-0 xl:max-w-screen-xl">
          <div className="cursor-pointer w-full h-52 bg-gray-200 flex items-center justify-center lg:h-64 transition-transform transform ease-in-out hover:scale-105">
            <h1 className="text-3xl font-medium">Renting</h1>
          </div>
          <div className="cursor-pointer w-full h-52 bg-gray-200 flex items-center justify-center lg:h-64 transition-transform transform ease-in-out hover:scale-105">
            <h1 className="text-3xl font-medium">Share a ride</h1>
          </div>
          <div className="cursor-pointer w-full h-52 bg-gray-200 flex items-center justify-center lg:h-64 transition-transform transform ease-in-out hover:scale-105">
            <h1 className="text-3xl font-medium">VIP</h1>
          </div>
          <div className="cursor-pointer w-full h-52 bg-gray-200 flex items-center justify-center lg:h-64 transition-transform transform ease-in-out hover:scale-105">
            <h1 className="text-3xl font-medium">Business</h1>
          </div>
        </div>
        <div className="bg-gray-50 py-10 px-8 ">
          <div className="md:px-0 md:flex md:flex-row-reverse md:items-center lg:max-w-screen-xl lg:m-auto">
            <img className="md:w-1/2" src="/wie-zijn-wij.jpg" alt="groepsfoto" />
            <div className="md:text-right inline-block md:px-5 lg:pr-16">
              <h1 className="py-4 text-4xl font-medium sm:text-5xl md:text-3xl md:pt-0 md:pb-4 lg:text-5xl">
                Wie zijn wij?
              </h1>
              <p className="text-xl font-light md:text-lg lg:text-xl">
                BE motorsport is professioneel bezig met het organiseren van je beleving. We
                personaliseren alles tot in de puntjes voor jou en je deelnemers.
              </p>
              <p className="text-xl font-normal mt-3 md:text-lg lg:text-xl">
                Wat heb je in gedachten?{" "}
                <span className="block xl:inline-block">Wij maken het waar!</span>
              </p>
              <div className="mt-7 lg:mt-9">
                <Link href="/contact">
                  <a className="bg-motorblue hover:bg-opacity-90 rounded-md text-white font-medium px-8 py-3">
                    Meer over ons
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
