import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Animations = () => {
  useEffect(() => {
    gsap.to(".reveal-up", {
      opacity: 0,
      y: "100%",
    });

    gsap.to("#dashboard", {
      boxShadow: "0px 15px 25px -5px rgba(170,49,233,0.44)",
      duration: 0.3,
      scrollTrigger: {
        trigger: "#hero-section",
        start: "60% 60%",
        end: "80% 80%",
      },
    });

    const sections = gsap.utils.toArray("section");
    sections.forEach((sec) => {
      gsap.timeline({
        scrollTrigger: {
          trigger: sec,
          start: "10% 80%",
          end: "20% 90%",
        },
      }).to(sec.querySelectorAll(".reveal-up"), {
        opacity: 1,
        duration: 0.8,
        y: "0%",
        stagger: 0.2,
      });
    });
  }, []);

  return null; // This component only runs animations
};

export default Animations;
