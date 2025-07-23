import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const useScrollAnimation = (threshold = 0.1) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold,
  });

  return { ref, inView };
};

export const useAnimateElementsOnScroll = () => {
  useEffect(() => {
    const animateElements = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
            }
          });
        },
        { threshold: 0.1 }
      );

      elements.forEach((element) => {
        observer.observe(element);
      });

      return () => {
        elements.forEach((element) => {
          observer.unobserve(element);
        });
      };
    };

    animateElements();

    return () => {};
  }, []);
};

export const useCountAnimation = (
  ref: React.RefObject<HTMLElement>,
  endValue: number,
  duration: number = 2000
) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let startTime: number | null = null;
            const startValue = 0;

            const animate = (timestamp: number) => {
              if (!startTime) startTime = timestamp;
              const progress = Math.min((timestamp - startTime) / duration, 1);
              const currentValue = Math.floor(
                progress * (endValue - startValue) + startValue
              );

              if (element) {
                element.textContent = currentValue.toString();
              }

              if (progress < 1) {
                window.requestAnimationFrame(animate);
              } else {
                if (element) {
                  element.textContent = endValue.toString();
                }
              }
            };

            window.requestAnimationFrame(animate);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [ref, endValue, duration]);
};

export default useScrollAnimation;
