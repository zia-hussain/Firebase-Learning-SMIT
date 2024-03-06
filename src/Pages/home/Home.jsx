import "./style.scss";
import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/Trending";
import Popular from "./popular/Popular";
import TopRated from "./toprated/TopRated";

function Home() {
  return (
    <div>
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
      <div style={{ height: 100 }}></div>
    </div>
  );
}

export default Home;
