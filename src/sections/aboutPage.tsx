import FadeIn from "../component/fadeIn";
import About from "./about";
import Study from "./study";
import Skills from "./skills";

function AboutPage() {
  return (
    <>
      <FadeIn><About /></FadeIn>
      <FadeIn delay={0.1}><Study /></FadeIn>
      <FadeIn delay={0.2}><Skills /></FadeIn>
    </>
  );
}

export default AboutPage;
