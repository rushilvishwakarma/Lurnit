import * as React from "react";
import { useState} from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import ImageUploadComponent from "@/components/content/ImageUploadComponent";

export default function AddQuestionsComponent() {
  const [imageSrc1, setImageSrc1] = useState<string>("");
  const [imageUrl1, setImageUrl1] = useState<string>("");


  return (
    <div className="flex gap-6">
      <div className="flex-1">
        <Card>
          <CardHeader>
            <CardTitle>Exam Details</CardTitle>
          </CardHeader>
          <CardContent>
              <div className="grid gap-3">
                <Input id="exam-name" type="text" className="w-full" placeholder="Exam Name" required />
                <Input id="exam-website" type="text" className="w-full" placeholder="Link for its Official Website" required />
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 relative">
        </div>
      </div>

      <div className="w-1/3">
        <ImageUploadComponent
          initialImageSrc={imageSrc1}
          initialImageUrl={imageUrl1}
          onImageChange={(src, url) => {
            setImageSrc1(src);
            setImageUrl1(url);
          }
        }
        />
      </div>
    </div>
  );
}