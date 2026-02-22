import { useState } from 'react'

interface ProductGalleryProps {
  images: string[]
  productName: string
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="space-y-4">
      {/* Main image */}
      <div className="aspect-square bg-white rounded-lg overflow-hidden">
        <img
          src={images[activeIndex]}
          alt={productName}
          className="w-full h-full object-contain p-6"
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-3">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-20 h-20 rounded-md overflow-hidden border-2 transition-colors ${
                index === activeIndex ? 'border-gold' : 'border-transparent'
              }`}
            >
              <img
                src={image}
                alt={`${productName} view ${index + 1}`}
                className="w-full h-full object-contain p-1 bg-white"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
