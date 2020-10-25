const { useRef, useEffect } = require("react");

/**
 * This hook is just a wrapper on "useRef" hook.
 * The only addition is that it can run a callback if
 * user clicks outside of the element, for which ref has
 * been provided.
 * 
 * @param {function} callback Function to handle outside click
 * @param {function} validate Function to be executed on filter
 * @param {Array<any>} deps Dependencies
 * 
 * @returns {object} Ref for element
 */
const useOutsideFilterRef = (callback, validate, deps) => {
  const ref = useRef(null);
  useEffect(() => {
    if (ref && ref.current && validate()) {
      const handleClick = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
          callback();
        }
      };
      document.addEventListener("click", handleClick);
      return () => document.removeEventListener("click", handleClick);
    }
  }, [...deps, ref, callback, validate]);

  return [ref];
};

export default useOutsideFilterRef;
