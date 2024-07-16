import React, { useState, useCallback } from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'; // Adjust the import path as needed
import { Checkbox } from '@/components/ui/checkbox'; // Adjust the import path as needed
import { Label } from '@/components/ui/label'; // Adjust the import path as needed
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import MathJaxRenderer from '@/components/MathJaxRenderer';

interface QuizRadioGroupProps {
  options: { value: string; label: string }[];
  correctAnswer: string;
  solutionPageLink: string;
  isMultiSelect: boolean; // Add this prop
}

const QuizRadioGroup: React.FC<QuizRadioGroupProps> = ({
  options,
  correctAnswer,
  solutionPageLink,
  isMultiSelect,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

  const handleOptionChange = useCallback((value: string) => {
    if (isMultiSelect) {
      setSelectedOptions(prevState => {
        const newSelectedOptions = [...prevState];
        if (newSelectedOptions.includes(value)) {
          return newSelectedOptions.filter(option => option !== value);
        } else {
          return [...newSelectedOptions, value];
        }
      });
    } else {
      setSelectedOptions([value]);
    }
  }, [isMultiSelect]);

  const handleCheckAnswer = () => {
    setShowCorrectAnswer(true);
  };

  return (
    <div className="mt-7">
      <div className="flex items-start">
        <div className="flex-grow">
          {isMultiSelect ? (
            <div className="space-y-4">
              {options.map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <Checkbox
                    checked={selectedOptions.includes(option.value)}
                    onChange={() => handleOptionChange(option.value)}
                    disabled={showCorrectAnswer}
                    className={
                      showCorrectAnswer
                        ? option.value === correctAnswer
                          ? 'bg-green-600'
                          : selectedOptions.includes(option.value)
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
            </div>
          ) : (
            <RadioGroup className="space-y-4" value={selectedOptions[0]} onValueChange={handleOptionChange}>
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
                          : selectedOptions[0] === option.value
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
          )}
        </div>

        <div className="flex flex-col space-y-4 max-w-xs ml-4">
          <Button
            disabled={selectedOptions.length === 0}
            onClick={handleCheckAnswer}
            className="w-full"
          >
            Check
          </Button>
          <Link href={solutionPageLink}>
            <Button
              disabled={!showCorrectAnswer}
              variant="secondary"
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
