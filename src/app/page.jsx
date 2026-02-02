import { Hero } from "./_components/Hero/Hero";
import { Intro } from "./_components/Intro/Intro";
import { Services } from "./_components/Services/Services";
import { WhyNeo } from "./_components/WhyNeo/WhyNeo";
import { Industries } from "./_components/Industries/Industries";
import { Process } from "./_components/Process/Process";
import { Jobs } from "./_components/Jobs/Jobs";
import { Locations } from "./_components/Locations/Locations";
import { Testimonials } from "./_components/Testimonials/Testimonials";
import { Blog } from "./_components/Blog/Blog";
import { Contact } from "./_components/Contact/Contact";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <Hero />
      <Intro />
      <Services />
      <WhyNeo />
      <Industries />
      <Process />
      <Jobs />
      <Locations />
      <Testimonials />
      <Blog />
      <Contact />
    </div>
  );
}
