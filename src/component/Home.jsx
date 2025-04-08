import TradingFeatures from "./TradingFeatures";
import AccountTypes from "./Accounttypes";
import TradingPlatforms from "./TradingPlatforms";
import MobileTradingApp from "./MobileTradingApp";
import TradingPlatformHero from "./TradingPlatformHero";
import SharesTradingInterface from "./SharesTradingInterface";
import FxProStatsInterface from "./FxProStatsInterfac";

import Dashboard from "./Component(Admin)/Dashboard";
import FAQ from "./faqs";
import Newlettee from "./Newlettee";

const Home = () => {
  return (
    <div>
      <TradingPlatformHero />
      <TradingFeatures />
      <Newlettee />
      <AccountTypes />
      <TradingPlatforms />
      <FxProStatsInterface />
      {/* <Dashboard/> */}
    </div>
  );
};

export default Home;
