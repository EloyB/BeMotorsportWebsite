import Link from "next/link";
import PlansSection from "../components/PlansSection";

export default function Home() {
  return (
    <div>
      <div className="h-screen w-full md:h-screen">
        <div className="h-1/2 w-full bg-blue-100 md:h-screen">
          <img
            className="h-4/5 w-auto object-cover xs:w-full lg:h-5/6 lg:w-full"
            src="/small-banner.jpg"
            alt="small banner"
          />
          <div className="px-8 h-1/5 w-full flex items-center justify-center bg-white lg:h-1/6">
            <h1 className="text-lg font-medium text-center md:text-2xl lg:text-3xl">
              Create your business experience
            </h1>
          </div>
        </div>
        <PlansSection />
        <div className="bg-gray-50 py-10 px-8 ">
          <div className="md:px-0 md:flex md:flex-row-reverse md:items-center lg:max-w-screen-xl lg:m-auto">
            <img className="md:w-1/2" src="/wie-zijn-wij.jpg" alt="groepsfoto" />
            <div className="md:text-right inline-block md:px-5 lg:pr-16">
              <h1 className="py-4 text-4xl font-medium sm:text-5xl md:text-3xl md:pt-0 md:pb-4 lg:text-5xl">
                Wie zijn wij?
              </h1>
              <p className="text-base font-light md:text-lg lg:text-xl">
                BE motorsport is professioneel bezig met het organiseren van je beleving. We
                personaliseren alles tot in de puntjes voor jou en je deelnemers.
              </p>
              <p className="text-base font-medium mt-3 md:text-lg lg:text-xl">
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
