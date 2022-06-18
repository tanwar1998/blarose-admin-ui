import React from 'react';
import { GalleryContainer } from './style.js';
import Gallery from './components/gallery.jsx';

export default function Invoices(props) {
    return (
        <GalleryContainer>
          { <Gallery/>}
        </GalleryContainer>
    );
  }