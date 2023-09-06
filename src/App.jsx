import FirstSection from "components/Sections/FirstSection";
import SecondSection from "components/Sections/SecondSection";

export default function App() {
  return (
    <div className="lg:grid lg:grid-cols-2">
      <FirstSection />
      <SecondSection />
    </div>
  );
}
