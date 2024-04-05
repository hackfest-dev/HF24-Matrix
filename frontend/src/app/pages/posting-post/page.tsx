import React from 'react';
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Component: React.FunctionComponent = () => {
  return (
    <Card className=" w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle>Submit your blog post</CardTitle>
        <CardDescription>Fill out the form below to submit your blog post.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input id="title" placeholder="Enter the title" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="content">Content</Label>
          <Textarea className="min-h-[100px]" id="content" placeholder="Enter the content" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="image">Image</Label>
          <Input accept="image/*" id="image" type="file" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="state">State</Label>
          <div className="space-y-2">
          <Input id="title" placeholder="Enter the State" required />
        </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="district">District</Label>
          <div className="space-y-2">
          <Input id="title" placeholder="Enter the District" required />
        </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button size="sm">Submit</Button>
      </CardFooter>
    </Card>
  );
}

export default Component;

