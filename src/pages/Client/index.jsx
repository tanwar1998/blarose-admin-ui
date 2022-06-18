import React from 'react';
import { ClientContainer } from './style.js';
import Client from './components/client.jsx';

export default function ClientContent(props) {
    return (
        <ClientContainer>
          { <Client/>}
        </ClientContainer>
    );
  }