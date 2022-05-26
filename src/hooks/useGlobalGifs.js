import React, {useContext} from 'react';
import GifContext from '../context/GifContext';

export default function useGlobalGifs(params) {
  const {gifs}  = useContext(GifContext);
  return gifs 
};

