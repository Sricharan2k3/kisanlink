import React from 'react';
import EsteemedPartners from './EsteemedPartners';
import OnboardingPartners from './Onboarding';
import Background from './Background';
import Implementation from './Implementation';
import ChannelPartners from './Channel';

const App = () => {
  return (
    <>
    <div className='items-center justify-center content-center'>
    <Background title={"Our Partners"}/>

    <EsteemedPartners/>
  
    <OnboardingPartners/>
    <Implementation/>
    <ChannelPartners/>
    </div>
    </>
  );
};

export default App;

