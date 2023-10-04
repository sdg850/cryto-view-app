import React, { useEffect, useRef, useState } from "react";
import "../styles/styles.css";

const UseLazyLoading = ({ children }) => {
  const [isLazyLoading, setIsLazyLoading] = useState(false);
  const refElement = useRef(null);

  useEffect(
    function () {
      Promise.resolve(
        typeof window.IntersectionObserver != "undefined"
          ? window.IntersectionObserver
          : import("intersection-observer")
      ).then(() => {
        const observer = new window.IntersectionObserver(function (entries) {
          const { isIntersecting } = entries[0];
          if (isIntersecting) {
            setIsLazyLoading(isIntersecting);
            observer.disconnect();
          }
        });
        observer.observe(refElement.current);
      });
    },
    [refElement]
  );

  return (
    <div className="lazy-loading" ref={refElement}>
      {isLazyLoading && children}
    </div>
  );
};

export default UseLazyLoading;
