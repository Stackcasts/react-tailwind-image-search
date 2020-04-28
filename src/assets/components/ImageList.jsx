import React, { useEffect } from 'react';
import ImageCard from './ImageCard';

export default function ImageList({results, searched}) {
  useEffect(() => {
    console.log('updated results: ', results);
  }, [results]);

  function mapResults() {
    if (results.length > 0) {
      return results.map(image => {
        return (
          <ImageCard
            image={image}
            key={image.id}
          />
        )
      });
    }

    if (searched) {
      return 'No results';
    }
  }

  return (
    <div className="grid grid-cols-3 gap-4 mb-24">
      {mapResults()}
    </div>
  )
}