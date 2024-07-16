import React, { useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel'; // Adjust the import path as needed
import Modal from '@/components/quiz/modal'; // Adjust the import path as needed
import DotPattern from '@/components/quiz/dot-pattern'; // Adjust the import path as needed
import { cn } from '@/lib/utils'; // Import your `cn` function if you have one

interface QuizCarouselProps {
  imageSrc1: string | null;
  imageSrc2: string | null;
  handleImageClick: (src: string) => void;
}

const QuizCarousel: React.FC<QuizCarouselProps> = ({ imageSrc1, imageSrc2, handleImageClick }) => {
  const [isImageModalVisible, setIsImageModalVisible] = useState(false);
  const [selectedImageSrc, setSelectedImageSrc] = useState<string | null>(null);

  const openModal = (src: string) => {
    setSelectedImageSrc(src);
    setIsImageModalVisible(true);
  };

  const closeModal = () => {
    setIsImageModalVisible(false);
    setSelectedImageSrc(null);
  };

  return (
    <>
      {(imageSrc1 || imageSrc2) && (
        <Carousel className="relative mt-4">
          <CarouselContent>
            {imageSrc1 && (
              <CarouselItem className="relative">
                <div
                  className="relative flex flex-col hover:opacity-75 cursor-pointer"
                  onClick={() => openModal(imageSrc1)}
                >
                  <DotPattern
                    className={cn(
                      "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
                      "absolute inset-0 rounded-md"
                    )}
                    style={{ opacity: 0.3, zIndex: 1 }} // Ensure DotPattern is on top
                  />
                  <div
                    className="rounded-md aspect-square p-4"
                    style={{ height: '163px', maxWidth: '100%', position: 'relative' }}
                  >
                    <img
                      src={imageSrc1}
                      alt="Image"
                      className="absolute inset-0 w-full h-full object-contain px-2 py-2"
                    />
                  </div>
                </div>
              </CarouselItem>
            )}
            {imageSrc2 && (
              <CarouselItem className="relative">
                <div
                  className="relative flex flex-col hover:opacity-75 cursor-pointer"
                  onClick={() => openModal(imageSrc2)}
                >
                  <DotPattern
                    className={cn(
                      "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
                      "absolute inset-0 rounded-md"
                    )}
                    style={{ opacity: 0.3, zIndex: 1 }} // Ensure DotPattern is on top
                  />
                  <div
                    className="rounded-md aspect-square p-4"
                    style={{ height: '163px', maxWidth: '100%', position: 'relative' }}
                  >
                    <img
                      src={imageSrc2}
                      alt="Image"
                      className="absolute inset-0 w-full h-full object-contain px-2 py-2"
                    />
                  </div>
                </div>
              </CarouselItem>
            )}
          </CarouselContent>
          <CarouselPrevious className="absolute left-7 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center" />
          <CarouselNext className="absolute right-7 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center" />
        </Carousel>
      )}

      <Modal
        isOpen={isImageModalVisible}
        onRequestClose={closeModal}
      >
        {selectedImageSrc && (
          <img src={selectedImageSrc} alt="Modal Image" className="max-w-full max-h-full object-contain" />
        )}
      </Modal>
    </>
  );
};

export default QuizCarousel;
