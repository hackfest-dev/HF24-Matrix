"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";
import { formatDistanceToNow } from "date-fns";
import Link from 'next/link';
import { Button } from "@/components/ui/button"

interface Post {
  _id: string;
  text: string;
  imageUrl: string;
  user: string;
  state: string;
  district: string;
  createdAt: string;
}

const Component: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get<{ data: Post[] }>(
        "http://localhost:8000/api/v1/posts/getposts"
      );
      if (Array.isArray(response.data.data)) {
        setPosts(response.data.data);
      } else {
        console.error("Posts data is not an array:", response.data);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  return (
    <div className="bg-white text-black px-4 py-6 md:px-6 lg:py-12">
      <div className="grid gap-6 md:gap-8">
        <div className="space-y-2">
          <h2 className="text-lg font-bold">Create a new post</h2>
          <Link href="/pages/posting-post">
              <Button className="bg-black text-white text-sm" variant="outline">
                New Post
              </Button>
          </Link>
        </div>
        {posts.map((post) => (
          <div className="space-y-9" key={post._id}>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="space-y-1.5">
                  <h3 className="text-sm font-bold">{post.user}</h3>
                  <h4 className="text-xs font-semibold tracking-wide text-gray-500 dark:text-gray-400">
                    {post.state}, {post.district}
                  </h4>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {formatDistanceToNow(new Date(post.createdAt), {
                    addSuffix: true,
                  })}
                </p>
              </div>
            </div>
            <p className="text-base leading-loose md:text-lg">{post.text}</p>
            {post.imageUrl && (
              <img
                alt="Post image"
                className="aspect-post overflow-hidden rounded-lg object-cover"
                height={300}
                src={post.imageUrl}
                width={500}
              />
            )}
            <hr className="border-gray-200 dark:border-gray-800" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Component;
