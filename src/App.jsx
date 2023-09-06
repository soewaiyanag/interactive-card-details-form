import FirstSection from "components/Sections/FirstSection";
import SecondSection from "components/Sections/SecondSection";

export default function App() {
  return (
    <div className="container min-h-screen md:grid md:grid-cols-2 md:gap-4">
      <FirstSection />
      <SecondSection />
    </div>
  );
}
