import bg_main_mobile from "@/images/bg-main-mobile.png";
import bg_main_desktop from "@/images/bg-main-desktop.png";

const MainBackground = () => {
  return (
    <picture className="absolute left-0 -z-10">
      {/* xl: 1280px is the screen size provided by tailwindcss */}
      <source media="(max-width: 1280px)" srcSet={bg_main_mobile} />
      <source media="(min-width: 1280px)" srcSet={bg_main_desktop} />
      <img
        src={bg_main_desktop}
        className="w-screen h-64 xs:h-72 xl:w-[calc(20vw+10rem)] xl:min-h-screen"
      />
    </picture>
  );
};

export default MainBackground;
