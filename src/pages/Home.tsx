import { About } from "../components/Home/About/About";
// import { BeatGeneratorCta } from "../components/Home/BeatGeneratorCta/BeatGeneratorCta";
// import { FAQCta } from "../components/Home/FAQCta/FAQCta";
import { Header } from "../components/Home/Header/Header";
import { Introduction } from "../components/Home/Introduction/Introduction";
import { MoreInfo } from "../components/Home/MoreInfo/MoreInfo";


export default function Home() {
  return (
    <>
      <Header />
      {/* <BeatGeneratorCta /> */}
      <Introduction />
      <MoreInfo />
      {/* <FAQCta/> */}
      <About/>
    </>
  );
}
