"useclient"
import React, { useState } from 'react';
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const BlogPostForm: React.FunctionComponent = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setImageFile(file);
  };

  const handleStateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
  };

  const handleDistrictChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDistrict(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('content', content);
      formData.append('state', state);
      formData.append('district', district);
      formData.append('imageUrl', imageFile);

      const response = await fetch('/api/posts', {
        method: 'POST',
        body: formData,
      });

      if (response.status === 201) {
        // Redirect to success page or blog posts list
        console.log('Post submitted successfully!');
      } else {
        console.error('Error submitting post:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting post:', error);
    }
  };

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle>Submit your blog post</CardTitle>
        <CardDescription>Fill out the form below to submit your blog post.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input id="title" placeholder="Enter the title" value={title} onChange={handleTitleChange} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="content">Content</Label>
          <Textarea className="min-h-[100px]" id="content" placeholder="Enter the content" value={content} onChange={handleContentChange} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="image">Image</Label>
          <Input accept="image/*" id="image" type="file" onChange={handleImageChange} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="state">State</Label>
          <Input id="state" placeholder="Enter the State" value={state} onChange={handleStateChange} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="district">District</Label>
          <Input id="district" placeholder="Enter the District" value={district} onChange={handleDistrictChange} required />
        </div>
      </CardContent>
      <CardFooter>
        <Button size="sm" onClick={handleSubmit}>Submit</Button>
      </CardFooter>
    </Card>
  );
}

export default BlogPostForm;
