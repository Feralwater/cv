import React from 'react';
import { Map } from './styles';

const GoogleMap = () => (
  <Map
    initial={{ opacity: 0, x: '100%' }}
    whileInView={{ opacity: 1, x: '0' }}
  >
    <iframe
      width="100%"
      height="100%"
      title="Google Maps"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1702.9364672037625!2d21.007817740401066!3d52.23710649772993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc8a6f3ef86b%3A0xa35d4f85e948e34d!2sMarsza%C5%82kowska%20140%2C%2000-061%20Warszawa!5e0!3m2!1sru!2spl!4v1662916372981!5m2!1sru!2spl"
    >
      <a href="https://www.maps.ie/distance-area-calculator.html">measure area map</a>
    </iframe>
  </Map>
);

export default GoogleMap;
