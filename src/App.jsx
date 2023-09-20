import FirstSection from "@/components/Sections/FirstSection";
import SecondSection from "@/components/Sections/SecondSection";
import MainBackground from "@/components/MainBackground/MainBackground";
import clsx from "clsx";

export default function App() {
  return (
    <div className="relative lg:min-h-screen overflow-hidden">
      <MainBackground />
      <div
        className={clsx(
          "grid grid-rows-[auto_1fr] sm:container",
          "lg:grid-cols-2 lg:gap-4 lg:min-h-screen lg:grid-rows-none"
        )}
      >
        <FirstSection />
        <SecondSection />
      </div>
    </div>
  );
}
