import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { BlogService } from "../services/blogService";
import { BlogCardProps } from "../types/blog";

export const BLOG_QUERY_KEYS = {
  all: ["blogs"] as const,
  detail: (id: number) => ["blogs", id] as const,
};

const useBlog = () => {
  const queryClient = useQueryClient();

  const {
    data: blogData = [],
    isLoading,
    error,
    refetch: fetchAllBlogs,
  } = useQuery({
    queryKey: BLOG_QUERY_KEYS.all,
    queryFn: () => BlogService.getAllBlogs(),
    staleTime: 1000 * 60 * 5,
  });

  const addMutation = useMutation({
    mutationFn: async (blog: BlogCardProps): Promise<BlogCardProps> => {
      await new Promise((r) => setTimeout(r, 300));
      const current = queryClient.getQueryData<BlogCardProps[]>(BLOG_QUERY_KEYS.all) ?? [];
      return {
        ...blog,
        id: Math.max(0, ...current.map((b) => b.id ?? 0)) + 1,
      };
    },
    onSuccess: (newBlog) => {
      queryClient.setQueryData<BlogCardProps[]>(BLOG_QUERY_KEYS.all, (old = []) => [
        ...old,
        newBlog,
      ]);
    },
  });

  const editMutation = useMutation({
    mutationFn: async ({
      id,
      blog,
    }: {
      id: number | undefined;
      blog: BlogCardProps;
    }): Promise<BlogCardProps> => {
      await new Promise((r) => setTimeout(r, 300));
      return { ...blog, id };
    },
    onSuccess: (updated) => {
      queryClient.setQueryData<BlogCardProps[]>(BLOG_QUERY_KEYS.all, (old = []) =>
        old.map((b) => (b.id === updated.id ? updated : b))
      );
      if (updated.id != null) {
        queryClient.setQueryData(BLOG_QUERY_KEYS.detail(updated.id), updated);
      }
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: number | undefined): Promise<number | undefined> => {
      await new Promise((r) => setTimeout(r, 300));
      return id;
    },
    onSuccess: (id) => {
      queryClient.setQueryData<BlogCardProps[]>(BLOG_QUERY_KEYS.all, (old = []) =>
        old.filter((b) => b.id !== id)
      );
      if (id != null) {
        queryClient.removeQueries({ queryKey: BLOG_QUERY_KEYS.detail(id) });
      }
    },
  });

  const fetchSingleBlog = async (id: number): Promise<BlogCardProps | null> => {
    const cached = queryClient.getQueryData<BlogCardProps>(BLOG_QUERY_KEYS.detail(id));
    if (cached) return cached;
    return queryClient.fetchQuery({
      queryKey: BLOG_QUERY_KEYS.detail(id),
      queryFn: () => BlogService.getBlogById(id),
      staleTime: 1000 * 60 * 5,
    });
  };

  return {
    blogData,
    isLoading,
    error: error instanceof Error ? error.message : error ? String(error) : null,
    fetchAllBlogs,
    fetchSingleBlog,
    addNewBlog: (blog: BlogCardProps) => addMutation.mutateAsync(blog),
    editExistingBlog: (id: number | undefined, blog: BlogCardProps) =>
      editMutation.mutateAsync({ id, blog }),
    deleteExistingBlog: (id: number | undefined) => deleteMutation.mutateAsync(id),
    isAdding: addMutation.isPending,
    isEditing: editMutation.isPending,
    isDeleting: deleteMutation.isPending,
  };
};

export default useBlog;
