import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { motion, useScroll } from "framer-motion";

export default function Layout() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        style={{
          scaleX: scrollYProgress,
          transformOrigin: "0%",
          height: "5px",
          backgroundColor: "blue",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 50,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />

      <Navbar />

      <div className=" mt-12 ">
        <Outlet />
      </div>
    </>
  );
}
