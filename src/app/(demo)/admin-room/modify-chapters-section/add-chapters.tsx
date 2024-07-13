import * as React from "react";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CirclePlus, Trash } from "lucide-react"; // Import icons from lucide-react
import { AutoComplete } from "@/components/ui/autocomplete";
import SUBJECTS from "../subjects.json";
import CHAPTERS from "../chapters.json";

// Define types for card and input
interface CardState {
  id: number;
  inputs: InputState[];
}

interface InputState {
  id: number;
  placeholder: string;
}

// Secondary Button Component
export function ButtonSecondary({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <Button variant="secondary" onClick={onClick} className="flex items-center gap-2">
      {children}
    </Button>
  );
}

// Destructive Button Component
export function ButtonDestructive({ onClick, children, disabled }: { onClick: () => void; children: React.ReactNode; disabled?: boolean }) {
  return (
    <Button variant="destructive" onClick={onClick} className="flex items-center gap-2" disabled={disabled}>
      <Trash className="h-4 w-4" />
      {children}
    </Button>
  );
}

export default function AddQuestionsComponent() {
  // Initialize the state with a single card containing multiple input fields
  const [card, setCard] = useState<CardState>({
    id: 1,
    inputs: [{ id: 1, placeholder: "Subject 1 Name" }]
  });

  // Function to add a new input field to the card
  const addInputField = () => {
    setCard(prevCard => {
      const newInputId = prevCard.inputs.length + 1; // Increment ID based on the length of inputs array
      return {
        ...prevCard,
        inputs: [
          ...prevCard.inputs,
          {
            id: newInputId, // Set ID
            placeholder: `Subject ${newInputId} Name` // Update placeholder dynamically
          }
        ]
      };
    });
  };

  // Function to remove the last input field from the card
  const removeInputField = () => {
    setCard(prevCard => {
      if (prevCard.inputs.length <= 1) return prevCard; // Ensure at least one input field remains
      return {
        ...prevCard,
        inputs: prevCard.inputs.slice(0, -1) // Remove the last input field
      };
    });
  };

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Related Data</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col-2 gap-3">
            <div className="w-full">
              <AutoComplete
                options={SUBJECTS}
                emptyMessage="No subjects found."
                placeholder="Select Subject"
                onValueChange={(value) => console.log(value)}
              />
            </div>
            <div className="w-full">
              <AutoComplete
                options={CHAPTERS}
                emptyMessage="No chapters found."
                placeholder="Select Chapter"
                onValueChange={(value) => console.log(value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Chapter Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            {card.inputs.map((input: InputState) => ( // Specify type for input
              <Input
                key={input.id}
                id={`subject-name-${card.id}-${input.id}`}
                type="text"
                className="w-full"
                placeholder={input.placeholder}
                required
              />
            ))}
          </div>
          <div className="flex justify-between mt-7">
            <ButtonSecondary onClick={addInputField}>
              <CirclePlus className="h-4 w-4" />
              Add More Subjects
            </ButtonSecondary>
            <ButtonDestructive
              onClick={removeInputField}
              disabled={card.inputs.length === 1}
            >
              Remove Entry
            </ButtonDestructive>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}