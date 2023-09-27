import FirstSection from "./components/Sections/FirstSection";
import SecondSection from "./components/Sections/SecondSection";
import MainBackground from "./components/MainBackground/MainBackground";
import SuccessSection from "./components/SuccessSection";
import clsx from "clsx";

export default function App() {
  return (
    <div className="relative xl:min-h-screen overflow-hidden">
      <MainBackground />
      <div
        className={clsx(
          "grid grid-rows-[auto_1fr] sm:container xl:container-fluid mx-auto px-4",
          "xl:grid-cols-2 xl:gap-4 xl:min-h-screen xl:grid-rows-none xl:-mt-8"
        )}
      >
        <FirstSection />
        {/* <SecondSection /> */}
        <SuccessSection />
      </div>
    </div>
  );
}
