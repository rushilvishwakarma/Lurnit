import * as React from "react";
import { useState} from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { AutoComplete } from "@/components/ui/autocomplete";
import SUBJECTS from "../subjects.json";
import CHAPTERS from "../chapters.json";
import { Textarea } from "@/components/ui/textarea";
import { ListChecks } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import ImageUploadComponent from "@/components/content/ImageUploadComponent";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button";

export default function AddQuestionsComponent() {
  const [isCheckboxMode, setIsCheckboxMode] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | undefined>(undefined);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const [imageSrc1, setImageSrc1] = useState<string>("");
  const [imageUrl1, setImageUrl1] = useState<string>("");
  const [imageSrc2, setImageSrc2] = useState<string>("");
  const [imageUrl2, setImageUrl2] = useState<string>("");

  const handleCheckboxToggle = () => {
    setIsCheckboxMode(!isCheckboxMode);
    setSelectedOption(undefined);
    setSelectedOptions([]);
    clearCorrectOptions();
  };

  const clearCorrectOptions = () => {
    for (let i = 1; i <= 4; i++) {
      const optionInput = document.getElementById(`correct-option-${i}`) as HTMLInputElement;
      if (optionInput) {
        optionInput.value = "";
      }
    }
  };

  const handleSingleOptionChange = (value: string | undefined) => {
    setSelectedOption(value);
    clearCorrectOptions();
    if (value) {
      handleOptionChange(value, "correct-option-1");
    }
  };

  const handleMultipleOptionChange = (values: string[]) => {
    setSelectedOptions(values);
    clearCorrectOptions();
    values.forEach((option, index) => {
      handleOptionChange(option, `correct-option-${index + 1}`);
    });
  };

  const handleOptionChange = (optionId: string, fieldId: string) => {
    const correctOptionInput = document.getElementById(fieldId) as HTMLInputElement;
    const selectedInput = document.getElementById(optionId) as HTMLInputElement;
    if (correctOptionInput && selectedInput) {
      correctOptionInput.value = selectedInput.value;
    }
  };


  return (
    <div className="flex gap-5">
      <div className="flex-1">
        <Card>
          <CardHeader>
            <CardTitle>Question Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              <div className="grid gap-3 grid-cols-1 md:grid-cols-2">
                <div className="flex flex-col gap-3">
                  <AutoComplete
                    options={SUBJECTS}
                    emptyMessage="No subjects found."
                    placeholder="Select Subject"
                    onValueChange={(value) => console.log(value)}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <AutoComplete
                    options={CHAPTERS}
                    emptyMessage="No chapters found."
                    placeholder="Select Chapter"
                    onValueChange={(value) => console.log(value)}
                  />
                </div>
              </div>
              <div className="grid gap-3">
                <Input id="topic" type="text" className="w-full" placeholder="Topic" required />
              </div>
              <div className="grid gap-3">
                <Input id="subtopic" type="text" className="w-full" placeholder="Sub-Topic" required />
              </div>
              <div className="mt-3 grid gap-3">
                <Label htmlFor="question">Question</Label>
                <Textarea
                  id="question"
                  placeholder="Type your question here."
                  className="h-[calc(70vh-5rem)] w-full"
                  required
                />
              </div>
              <div className="grid gap-3 pb-5 pt-4">
              <Badge variant="outline">Suggested Order: Exam-Name — Batch — Year — Shift </Badge>
                <Input id="badge" type="text" className="w-full" placeholder="Badge" required />


                <div className="grid gap-3 pt-3">
                <Label htmlFor="badge">Difficulty</Label>
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="easy" id="r1" />
        <Label htmlFor="r1">Easy</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="medium" id="r2" />
        <Label htmlFor="r2">Moderate</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="hard" id="r3" />
        <Label htmlFor="r3">Difficult</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="fact" id="r3" />
        <Label htmlFor="r3">Fact</Label>
      </div>
    </RadioGroup>
    </div>
 

              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 relative">
          <Card>
            <CardHeader>
              <CardTitle>Multiple Choices</CardTitle>
              <div className="absolute top-1 right-3">
                <Toggle
                  aria-label="Toggle Checkbox MCQ"
                  pressed={isCheckboxMode}
                  onPressedChange={handleCheckboxToggle}
                >
                  <ListChecks className="h-4 w-4" />
                </Toggle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                {["option-a", "option-b", "option-c", "option-d"].map((option, index) => (
                  <div key={option} className="flex items-center gap-2">
                    <Input
                      id={option}
                      type="text"
                      className="w-full"
                      placeholder={`Option ${String.fromCharCode(65 + index)}`}
                      required
                    />
                    {isCheckboxMode ? (
                      <ToggleGroup
                        type="multiple"
                        value={selectedOptions}
                        onValueChange={(values) => handleMultipleOptionChange(values)}
                      >
                        <ToggleGroupItem
                          value={option}
                          aria-label={`Select Option ${String.fromCharCode(65 + index)}`}
                        >
                          {String.fromCharCode(65 + index)}
                        </ToggleGroupItem>
                      </ToggleGroup>
                    ) : (
                      <ToggleGroup
                        type="single"
                        value={selectedOption}
                        onValueChange={(value) => handleSingleOptionChange(value as string | undefined)}
                      >
                        <ToggleGroupItem
                          value={option}
                          aria-label={`Select Option ${String.fromCharCode(65 + index)}`}
                        >
                          {String.fromCharCode(65 + index)}
                        </ToggleGroupItem>
                      </ToggleGroup>
                    )}
                  </div>
                ))}
                <div className="border-2 border-dashed border-muted-foreground/20 rounded-lg">
                <div className="p-4 space-y-4">
                <Label htmlFor="question">Toggled Answers (Hidden in the final build)</Label>
                <Input
                  id="correct-option-1"
                  type="text"
                  className="w-full"
                  placeholder="Correct Option 1"
                  required
                />
                <Input
                  id="correct-option-2"
                  type="text"
                  className="w-full"
                  placeholder="Correct Option 2"
                  disabled={!isCheckboxMode}
                />
                <Input
                  id="correct-option-3"
                  type="text"
                  className="w-full"
                  placeholder="Correct Option 3"
                  disabled={!isCheckboxMode}
                />
                <Input
                  id="correct-option-4"
                  type="text"
                  className="w-full"
                  placeholder="Correct Option 4"
                  disabled={!isCheckboxMode}
                />
                </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="w-1/3">
        <ImageUploadComponent
          title="Upload Question Related Image 1"
          initialImageSrc={imageSrc1}
          initialImageUrl={imageUrl1}
          onImageChange={(src, url) => {
            setImageSrc1(src);
            setImageUrl1(url);
          }
        }
        />
        <ImageUploadComponent
          title="Upload Question Related Image 2"
          initialImageSrc={imageSrc2}
          initialImageUrl={imageUrl2}
          onImageChange={(src, url) => {
            setImageSrc2(src);
            setImageUrl2(url);
          }
        }
        />
      </div>
    </div>
  );
}