import {motion} from "motion/react";

export default function ScrollAnimationWrapper({children, className, ...props}: {children: React.ReactNode, className: string}) {
  // { children }: { children: React.ReactNode }
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}