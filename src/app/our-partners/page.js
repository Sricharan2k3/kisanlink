import React from "react";
import EsteemedPartners from "./EsteemedPartners";
import OnboardingPartners from "./Onboarding";
import Background from "@/utils/background";
import Implementation from "./Implementation";
import ChannelPartners from "./Channel";

const App = () => {
  return (
    <div>
      <Background title={"Our Partners"} />
      <EsteemedPartners />
      <OnboardingPartners />
      <Implementation />
      <ChannelPartners />
    </div>
  );
};

export default App;
