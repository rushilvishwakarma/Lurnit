"use client";
import * as React from "react";
import { ContentLayout } from "@/components/panel/content-layout";
import AddQuestionsComponent from "./add-exams";
import AddSolutionsComponent from "./add-subjects";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function AdminRoom() {
  const [currentTab, setCurrentTab] = React.useState<"add-exams" | "add-subjects">("add-exams");

  const handlePrevious = () => {
    setCurrentTab("add-exams");
  };

  const handleNext = () => {
    setCurrentTab("add-subjects");
  };

  return (
    <ContentLayout title="Administration">
      <div className="pt-10 pb-2">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal">
          Upload Exams Details & its Subjects
        </h1>
      </div>

      <div className="flex flex-col items-center mt-8 w-full">
        <div className="w-full">
          {currentTab === "add-exams" ? (
            <AddQuestionsComponent />
          ) : (
            <AddSolutionsComponent />
          )}
        </div>
        <div className="flex justify-between mt-6 w-full">
          {currentTab === "add-subjects" && (
            <Button variant="outline" onClick={handlePrevious} className="flex items-center space-x-2">
              <ChevronLeft className="h-4 w-4" />
              <span>Go Back to Adding Exam Entry</span>
            </Button>
          )}
          {currentTab === "add-exams" && (
            <div className="ml-auto">
              <Button variant="outline" onClick={handleNext} className="flex items-center space-x-2">
                <span>Add Subject Names for the Exam</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </ContentLayout>
  );
}
