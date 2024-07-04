import React, { useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel'; // Adjust the import path as needed
import Modal from '@/components/quiz/modal'; // Adjust the import path as needed

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
              <CarouselItem>
                <div
                  className="flex flex-col hover:opacity-75 cursor-pointer"
                  onClick={() => openModal(imageSrc1)}
                >
                  <div
                    className="bg-muted rounded-md aspect-square p-4"
                    style={{ height: '160px', maxWidth: '100%', position: 'relative' }}
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
              <CarouselItem>
                <div
                  className="flex flex-col hover:opacity-75 cursor-pointer"
                  onClick={() => openModal(imageSrc2)}
                >
                  <div
                    className="bg-muted rounded-md aspect-square p-4"
                    style={{ height: '160px', maxWidth: '100%', position: 'relative' }}
                  >
                    <img
                      src={imageSrc2}
                      alt="Image"
                      className="absolute inset-0 w-full h-full object-contain px-2"
                    />
                  </div>
                </div>
              </CarouselItem>
            )}
          </CarouselContent>
          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
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
