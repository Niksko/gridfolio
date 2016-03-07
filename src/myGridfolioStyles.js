"use strict"

import React from 'react'

// This is a default styles object. You can create your own, then import
// the chosen one into myGridfolio.js (line 6) as style.your_object_name.
// Or, you can just change this one directly.

export const Default = {
  body: {
    maxWidth: 1200,
  },
  block: {
    heightRatio: 1,
    outerPadding: 10,
    innerPadding: 10,
    borderRadius: '0',
    backgroundColor: '#f1f1f2',
    tint: 'rgba(0,0,0,0.4)',
    textAlign: 'center',
    title: {
      color: '#fff',
      fontSize: 22,
      fontFamily: 'Geo', // ! Remember to add any font resources to index.html in a link tag.
      textTransform: 'uppercase',
      fontWeight: 'bold'
    },
    keywords: {
      marginTop: -25,
      marginBottom: 10,
      textAlign: 'center'
    },
    keyword: {
      fontSize: 12,
      fontFamily: 'Geo', // ! Remember to add any font resources to index.html in a link tag.
      color: '#666',
      backgroundColor: 'rgba(240,240,240,0.75)',
      padding: '2px 4px',
      fontWeight: 'bold',
      textTransform: 'uppercase'
    }
  }
}

export const Circular = {
  body: {
    maxWidth: 1400,
  },
  block: {
    heightRatio: 1,
    outerPadding: 20,
    innerPadding: 20,
    borderRadius: '50%',
    backgroundColor: '#fff',
    tint: 'rgba(0,0,100,0.4)',
    textAlign: 'center',
    title: {
      color: '#fff',
      fontSize: 22,
      fontFamily: 'Geo', // ! Remember to add any font resources to index.html in a link tag.
      textTransform: 'uppercase',
      fontWeight: 'bold'
    },
    keywords: {
      marginTop: -120,
      marginBottom: 120,
      textAlign: 'center'
    },
    keyword: {
      fontSize: 12,
      fontFamily: 'Geo', // ! Remember to add any font resources to index.html in a link tag.
      color: '#666',
      backgroundColor: 'rgba(240,240,240,0.75)',
      padding: '2px 4px',
      fontWeight: 'bold',
      textTransform: 'uppercase'
    }
  }
}
