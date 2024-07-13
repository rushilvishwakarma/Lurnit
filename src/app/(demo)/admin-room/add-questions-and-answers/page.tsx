"use client";
import * as React from "react";
import { ContentLayout } from "@/components/panel/content-layout";
import AddQuestionsComponent from "./add-questions";
import AddSolutionsComponent from "./add-solutions";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react"; // Import icons from lucide-react

export default function AdminRoom() {
  const [currentTab, setCurrentTab] = React.useState<"add-question" | "add-solution">("add-question");

  const handlePrevious = () => {
    setCurrentTab("add-question");
  };

  const handleNext = () => {
    setCurrentTab("add-solution");
  };

  return (
    <ContentLayout title="Administration">

<div className="pt-10 pb-2">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal">
          Upload Questions & their Solutions
        </h1>
      </div>


      <div className="flex flex-col items-center mt-8 w-full">
        <div className="w-full">
          {currentTab === "add-question" ? (
            <AddQuestionsComponent />
          ) : (
            <AddSolutionsComponent />
          )}
        </div>
        <div className="flex justify-between mt-6 w-full">
          {currentTab === "add-solution" && (
          <Button variant="outline" onClick={handlePrevious} className="flex items-center space-x-2">
          <ChevronLeft className="h-4 w-4" />
          <span>Go Back to Adding Question</span>
        </Button>
      )}
      {currentTab === "add-question" && (
        <div className="ml-auto">
          <Button variant="outline" onClick={handleNext} className="flex items-center space-x-2">
            <span>Add Solution to the Question</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
            </div>
          )}
        </div>
      </div>
    </ContentLayout>
  );
}
