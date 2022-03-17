import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

export function scrollTo({ to, duration = 1, offset }) {
  gsap.to(window, { duration, scrollTo: { y: to }, offset });
}

export function scrollReveal(
  ref,
  { from, to, start = 'top top', toggleActions = 'play none none reverse' },
) {
  gsap.fromTo(
    ref,
    { xPercent: from },
    {
      xPercent: to,
      scrollTrigger: {
        start,
        toggleActions,
        // markers: true,
      },
    },
  );
}
