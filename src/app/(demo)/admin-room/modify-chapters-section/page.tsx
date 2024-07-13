"use client";
import * as React from "react";
import { ContentLayout } from "@/components/panel/content-layout";
import AddSolutionsComponent from "./add-chapters";
import { Button } from "@/components/ui/button";

export default function AdminRoom() {
  return (
    <ContentLayout title="Administration">
<div className="pt-10 pb-2">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal">
          Upload Chapters Details of a Subject
        </h1>
      </div>

      <div className="flex flex-col items-center mt-8 w-full">
        <div className="w-full">
            <AddSolutionsComponent />

        </div>
      </div>
    </ContentLayout>
  );
}
