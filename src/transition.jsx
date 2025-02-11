import { motion } from "framer-motion";

const transition = (Components, name) => {
  const TransitionComponent = (props) => (
    <>
      <Components {...props} />
      <div>
        <motion.div
          className="slide-in absolute inset-0  z-[99999999999] overflow-hidden"
          initial={{ height: 0 }}
          animate={{ height: 0 }}
          exit={{ height: "100%" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            className="absolute inset-0 md:text-7xl md:font-medium text-white grid place-content-center font-specify_exp_med"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            {name}
          </motion.p>
        </motion.div>
        <motion.div
          className="slide-out absolute inset-0  z-[99999999999] overflow-hidden"
          initial={{ height: "100%" }}
          animate={{ height: 0 }}
          exit={{ height: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            className="absolute inset-0 md:text-7xl md:font-medium text-white grid place-content-center font-specify_exp_med"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            {name}
          </motion.p>
        </motion.div>
      </div>
    </>
  );

  TransitionComponent.displayName = `TransitionComponent(${Components.displayName || Components.name || 'Anonymous'})`;
  return TransitionComponent;
};

export default transition;