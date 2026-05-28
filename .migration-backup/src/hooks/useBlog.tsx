import { useState, useEffect } from "react";
import { BlogService } from "../services/blogService";
import { BlogCardProps } from "../types/blog"; 

const useBlog = () => {
  const [blogData, setBlogData] = useState<BlogCardProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAllBlogs = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await BlogService.getAllBlogs();
      setBlogData(data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred while fetching blogs.");
      }
      console.error("Error fetching blogs:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchSingleBlog = async (id: number): Promise<BlogCardProps | null> => {
    setIsLoading(true);
    setError(null);
    try {
      const blog = await BlogService.getBlogById(id);
      return blog;
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred while fetching the blog.");
      }
      console.error("Error fetching blog:", error);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const addNewBlog = async (blog: BlogCardProps): Promise<BlogCardProps | null> => {
    setError(null);
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const newBlog = {
        ...blog,
        id: Math.max(...blogData.map(b => b.id || 0)) + 1
      };
      
      setBlogData((prevBlogs) => [...prevBlogs, newBlog]);
      return newBlog;
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred while adding the blog.");
      }
      console.error("Error adding blog:", error);
      return null;
    }
  };

  const editExistingBlog = async (
    id: number | undefined,
    blog: BlogCardProps
  ): Promise<BlogCardProps | void> => {
    setError(null);
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const updatedBlog = { ...blog, id };
      setBlogData((prevBlogs) =>
        prevBlogs.map((b) => (b.id === id ? updatedBlog : b))
      );
      return updatedBlog;
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred while editing the blog.");
      }
      console.error("Error editing blog:", error);
    }
  };

  const deleteExistingBlog = async (id: number | undefined): Promise<boolean> => {
    setError(null);
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 300));
      
      setBlogData((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
      return true;
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred while deleting the blog.");
      }
      console.error("Error deleting blog:", error);
      return false;
    }
  };

  useEffect(() => {
    fetchAllBlogs();
  }, []);

  return {
    blogData,
    isLoading,
    error,
    fetchAllBlogs,
    fetchSingleBlog,
    addNewBlog,
    editExistingBlog,
    deleteExistingBlog,
  };
};

export default useBlog;