import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Floating orbs */}
      <motion.div
        className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ top: '10%', left: '10%' }}
      />
      
      <motion.div
        className="absolute w-64 h-64 bg-blue-300/20 rounded-full blur-2xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ top: '60%', right: '15%' }}
      />

      <motion.div
        className="absolute w-48 h-48 bg-cyan-300/15 rounded-full blur-xl"
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ top: '30%', left: '70%' }}
      />

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute w-4 h-4 bg-white/30 rotate-45"
        animate={{
          y: [0, -20, 0],
          rotate: [45, 225, 45],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ top: '20%', left: '20%' }}
      />

      <motion.div
        className="absolute w-6 h-6 bg-white/20"
        animate={{
          y: [0, 30, 0],
          x: [0, 15, 0],
          rotate: [0, 180, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ top: '70%', left: '80%' }}
      />

      <motion.div
        className="absolute w-3 h-3 bg-white/40 rounded-full"
        animate={{
          y: [0, -15, 0],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ top: '50%', left: '30%' }}
      />

      {/* Grid pattern overlay */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ['0px 0px', '50px 50px', '0px 0px'],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
