import AnimatedHero from "./AnimatedHero";
import OurClients from "./OurClients";
import Services from "./Services";
import Testimonials from "./Testimonials";
import WhoWeAre from "./WhoWeAre";

function Main() {
  return (
    <main>
      <section>
        <AnimatedHero />
      </section>
      <section>
        <WhoWeAre />
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
    </main>
  );
}

export default Main;
