import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

let _aosInitialized = false;

const useAOS = (options?: AOS.AosOptions) => {
  useEffect(() => {
    if (!_aosInitialized) {
      AOS.init({
        duration: 750,
        easing: "ease-out-cubic",
        once: true,
        offset: 50,
        delay: 0,
        ...options,
      });
      _aosInitialized = true;
    } else {
      AOS.refresh();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
};

export default useAOS;