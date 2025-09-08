import React from "react";
import { motion } from "framer-motion";

import IntroSection from "../../components/IntroSection";
import ProjectsSection from "../../components/ProjectsSection/index.js";
import SkillsSection from "../../components/SkillsSection";
import WorkSection from "../../components/WorkSection/index.js";
import GuitarSection from "../../components/GuitarSection/index.js";
import ContactSection from "../../components/ContactSection/index.js";

function MainPage() {
  return (
    <motion.div
      key="mainpage"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <IntroSection />
      <WorkSection />
      <ProjectsSection />
      <SkillsSection />
      <GuitarSection />
      <ContactSection />
    </motion.div>
  );
}

export default MainPage;
