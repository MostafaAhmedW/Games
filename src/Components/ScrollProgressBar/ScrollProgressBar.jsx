import { motion, useScroll } from "framer-motion"

export default function ScrollProgressBar() {

  const { scrollYProgress  } = useScroll();
  motion

  return (

    <>
    <motion.div>

         style={{
        scaleX: scrollYProgress, // بيكبر شريط العرض حسب نسبة التمرير
        transformOrigin: "0%",   // يبدأ التكبير من اليسار
        height: "5px",
        backgroundColor: "blue",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 50
      }}



    </motion.div>


    
    
    </>

  )
}
