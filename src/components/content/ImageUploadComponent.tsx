import * as React from "react";
import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImageUploadComponentProps {
    title?: string;
    initialImageSrc?: string;
    initialImageUrl?: string;
    onImageChange: (imageSrc: string, imageUrl: string) => void;
  }

const ImageUploadComponent: React.FC<ImageUploadComponentProps> = ({
  title,
  initialImageSrc,
  initialImageUrl,
  onImageChange,
}) => {
  const [imageSrc, setImageSrc] = useState<string>(initialImageSrc || "");
  const [imageUrl, setImageUrl] = useState<string>(initialImageUrl || "");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setImageSrc(event.target.result.toString());
          onImageChange(event.target.result.toString(), imageUrl);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;
    setImageUrl(url);
    setImageSrc(url);
    onImageChange(imageSrc, url);
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleReset = () => {
    setImageUrl("");
    setImageSrc("");
    onImageChange("", "");
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result as string);
        onImageChange(reader.result as string, imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Card className="mb-6">
      <CardHeader>
      <CardTitle>{title || "Upload Image"}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <div className="grid gap-3">
            <Input
              id="image-url"
              type="text"
              placeholder="Enter image URL"
              value={imageUrl}
              onChange={handleUrlChange}
            />
          </div>
          <div
            className="border-2 border-dashed border-muted-foreground/20 p-6 rounded-lg flex justify-center items-center cursor-pointer"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={handleUploadClick}
          >
            {imageSrc ? (
              <img src={imageSrc} alt="Uploaded" className="max-h-60" />
            ) : (
              <div className="text-center">
                <Upload className="w-12 h-12 mx-auto text-muted-foreground" />
                <p className="mt-2 text-muted-foreground">Drag and drop an image, or click to select</p>
              </div>
            )}
          </div>
          <input
            ref={fileInputRef}
            id="image-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </div>
        <div className="flex justify-end mt-4">
          <Button onClick={handleReset} variant="destructive">
            Reset
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ImageUploadComponent;
