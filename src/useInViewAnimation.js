import { useInView } from 'react-intersection-observer';

const useInViewAnimation = (options = { threshold: 0.1, triggerOnce: true }) => {
  const { ref, inView } = useInView(options);

  return { ref, inView };
};

export default useInViewAnimation;
