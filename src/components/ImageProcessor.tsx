import { useState, useEffect } from 'react';
import { removeTextFromImage } from '@/lib/imageProcessing';

interface ImageProcessorProps {
  src: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
}

const ImageProcessor = ({ src, alt, className, loading = "lazy" }: ImageProcessorProps) => {
  const [processedSrc, setProcessedSrc] = useState(src);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const processImage = async () => {
      setIsProcessing(true);
      try {
        const cleanedImage = await removeTextFromImage(src);
        setProcessedSrc(cleanedImage);
      } catch (error) {
        console.warn('Failed to process image, using original:', error);
        setProcessedSrc(src);
      } finally {
        setIsProcessing(false);
      }
    };

    // Only process local images (from uploads)
    if (src.includes('lovable-uploads')) {
      processImage();
    } else {
      setProcessedSrc(src);
    }
  }, [src]);

  return (
    <div className="relative">
      <img 
        src={processedSrc} 
        alt={alt} 
        className={className}
        loading={loading}
      />
      {isProcessing && (
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <div className="bg-white/90 px-3 py-1 rounded text-sm">
            Cleaning image...
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageProcessor;