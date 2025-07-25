import TrendingSection from "./TrendingSection";
import GeneralSection from "./GeneralSection";

const Center = function () {
  return (
    <>
      <GeneralSection text="Trending Now" search="Lord of the rings" />
      <GeneralSection text="Watch it Again" search="Star Wars" />
      <GeneralSection text="New Releases" search="twilight zone" />
    </>
  );
};

export default Center;
