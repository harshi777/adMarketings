import AnimatedHero from "./_components/AnimatedHero";
import OurClients from "./_components/OurClients";
import Services from "./_components/Services";
import Testimonials from "./_components/Testimonials";
import WhoWeAreAnimated from "./_components/WhoWeAre";

function Page() {
  return (
    <>
      <section>
        <AnimatedHero />
      </section>
      <section>
        <WhoWeAreAnimated />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <OurClients />
      </section>
      <section>
        <Testimonials />
      </section>
    </>
  );
}

export default Page;
