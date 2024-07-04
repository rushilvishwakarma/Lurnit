import React, { useState, useCallback } from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'; // Adjust the import path as needed
import { Label } from '@/components/ui/label'; // Adjust the import path as needed
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import MathJaxRenderer from '@/components/MathJaxRenderer';

interface QuizRadioGroupProps {
  options: { value: string; label: string }[];
  correctAnswer: string;
  solutionPageLink: string;
}

const QuizRadioGroup: React.FC<QuizRadioGroupProps> = ({
  options,
  correctAnswer,
  solutionPageLink,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>(undefined);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

  const handleRadioChange = useCallback((value: string) => {
    setSelectedOption(prevState => (prevState !== value ? value : prevState));
  }, []);

  const handleCheckAnswer = () => {
    setShowCorrectAnswer(true);
  };

  return (
    <div className="mt-7">
      <div className="flex items-start">
        <div className="flex-grow">
          <RadioGroup className="space-y-4" value={selectedOption} onValueChange={handleRadioChange}>
            {options.map((option) => (
              <div key={option.value} className="flex items-center space-x-2">
                <RadioGroupItem
                  value={option.value}
                  id={option.value}
                  disabled={showCorrectAnswer}
                  className={
                    showCorrectAnswer
                      ? option.value === correctAnswer
                        ? 'bg-green-600'
                        : selectedOption === option.value
                        ? 'bg-red-600'
                        : ''
                      : ''
                  }
                />
                <Label
                  htmlFor={option.value}
                  className="font-bold"
                >
                  <MathJaxRenderer math={option.label} isExpanded={true} />
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
        
        <div className="flex flex-col space-y-4 max-w-xs ml-4">
          <Button
            disabled={!selectedOption}
            onClick={handleCheckAnswer}
            className="w-full"
          >
            Check
          </Button>
          <Link href={solutionPageLink}>
            <Button
              disabled={!showCorrectAnswer}
              variant="outline"
              className="w-full"
            >
              View Solution
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuizRadioGroup;
