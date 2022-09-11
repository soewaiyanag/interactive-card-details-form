import CardFront from "./CardFront";
import CardBack from "./CardBack";

export default function App() {
  return (
    <div className="bg-main-mobile h-68 bg-cover sm:bg-main-desktop relative">
      <div className="absolute left-5 top-1/2 z-10">
        <CardFront />
      </div>
      <div className="absolute right-5 top-7">
        <CardBack />
      </div>
    </div>
  );
}
