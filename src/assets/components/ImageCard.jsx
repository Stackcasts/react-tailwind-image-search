import React from 'react';

export default function ImageCard({ image }) {
  console.log('image: ', image);
  function renderTags() {
    if (image.tags.length > 0) {
      return image.tags.map(tag => {
        return (
          <span
            class="inline-block bg-gray-200 rounded-full mb-4 px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            {tag.title}
          </span>
        )
      })
    }

    return <div />
  }
  return (
    <div className="rounded-lg shadow-lg">
      <img
        src={image.urls.full}
        alt={image.alt_description}
        className="mb-6"
      />

      <div className="m-8">
        {renderTags()}
      </div>
    </div>
  )
}
