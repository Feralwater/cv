import React from 'react';
import { Map } from './styles';

const GoogleMap = () => (
  <Map>
    <iframe
      width="100%"
      height="350"
      title="Google Maps"
      src="https://maps.google.com/maps?width=100%25&amp;height=350&amp;hl=en&amp;q=43b%20Tsintsadze%20street%20Georgia%20Tbilisi+(I%20am%20here)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
    >
      <a href="https://www.maps.ie/distance-area-calculator.html">measure area map</a>
    </iframe>
  </Map>
);

export default GoogleMap;
