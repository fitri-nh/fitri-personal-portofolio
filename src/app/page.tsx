import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/ui/Social";
import Photo from "@/components/photo";

const Home = () => {
  return (
      <section className="h-full">
        <div className="container mx-auto h-full gap-4">
          <div className="flex flex-col xl:flex-row items-center justify-between gap-[30px] xl:pt-6 xl:pb-30">
            {/* photo of me */}
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo />
            </div>
            {/* name */}
            <div className="text-center xl:text-left order-2 xl:order-none">
              <h2 className="h1">
                Hello I am <br /> <span className="text-accent">Fitri Nur Handayani</span>
              </h2>
              <p className="max-w-[500px] mb-9 text-white/80"> eager and agile learning who enjoy tech and data </p>
              {/* Socmed button */}
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                  <span>Download CV</span>
                  <FiDownload className="text-xl"/>
                </Button>
                <div className="mb-8 xl:mb-0">
                  <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Home
