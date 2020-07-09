import { useRef, useState, useEffect } from "react";
import AwesomeDebouncePromise from "awesome-debounce-promise";

function useHover() {
  const [value, setValue] = useState(false);

  const ref = useRef(null);

  const handleMouseOver = () => setValue(true);

  const handleMouseOut = () => setValue(false);

  // debounce was used so that when hovering over the portfolio link thre were less flickers
  const handleMouseOutDebounced = AwesomeDebouncePromise(
    handleMouseOut,
    200
    // options,
  );
  const handleMouseOverDebounced = AwesomeDebouncePromise(
    handleMouseOver,
    200
    // options,
  );



  useEffect(
    () => {
      const node = ref.current;
      if (node) {
        node.addEventListener("mouseover", handleMouseOverDebounced);
        node.addEventListener("mouseout", handleMouseOutDebounced);

        return () => {
          node.removeEventListener("mouseover", handleMouseOverDebounced);
          node.removeEventListener("mouseout", handleMouseOutDebounced);
        };
      }
    }
    // [ref.current] // Recall only if ref changes
  );

  return [ref, value];
}

export default useHover;
