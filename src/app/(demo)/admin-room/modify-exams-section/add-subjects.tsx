import * as React from "react";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CirclePlus, Trash } from "lucide-react"; // Import icons from lucide-react
import { Badge } from "@/components/ui/badge";

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
      <CirclePlus className="h-4 w-4" />
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
          <div className="flex flex-col-2 gap-2">
            <CardTitle>Add Subjects Entries</CardTitle>
            <Badge variant="outline">Suggested Order: PHY — CHEM — MATH — BIO — ENG — CS — ...</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            {card.inputs.map((input: InputState) => (
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
