import * as React from "react";
import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ImageUploadComponent from "@/components/content/ImageUploadComponent";

export default function AddSolutionsComponent() {
  const [imageSrc, setImageSrc] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");

  const handleImageChange = (src: string, url: string) => {
    setImageSrc(src);
    setImageUrl(url);
  };

  const handleReset = () => {
    setImageUrl("");
    setImageSrc("");
  };

  return (
    <div className="flex flex-col space-y-4 py-6">
      <Textarea
        placeholder="Type the solution here."
        className="h-[calc(70vh-5rem)] w-full"
      />

      <div className="flex flex-row-1 mt-6">
        <ImageUploadComponent
          title="Upload Solution Related Image"
          initialImageSrc={imageSrc}
          initialImageUrl={imageUrl}
          onImageChange={handleImageChange}
        />
      </div>
    </div>
  );
}