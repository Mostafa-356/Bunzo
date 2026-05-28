import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { BurgerService } from "../services/burgerService";
import { BurgerType } from "../types/burger";

export const BURGER_QUERY_KEYS = {
  all: ["burgers"] as const,
  detail: (id: number) => ["burgers", id] as const,
};

const useBurger = () => {
  const queryClient = useQueryClient();

  const {
    data: burgerData = [],
    isLoading,
    error,
    refetch: fetchBurgers,
  } = useQuery({
    queryKey: BURGER_QUERY_KEYS.all,
    queryFn: () => BurgerService.getAllBurgers(),
    staleTime: 1000 * 60 * 5,
  });

  const addMutation = useMutation({
    mutationFn: async (burger: BurgerType): Promise<BurgerType> => {
      await new Promise((r) => setTimeout(r, 300));
      const current = queryClient.getQueryData<BurgerType[]>(BURGER_QUERY_KEYS.all) ?? [];
      return {
        ...burger,
        id: Math.max(0, ...current.map((b) => b.id ?? 0)) + 1,
      };
    },
    onSuccess: (newBurger) => {
      queryClient.setQueryData<BurgerType[]>(BURGER_QUERY_KEYS.all, (old = []) => [
        ...old,
        newBurger,
      ]);
    },
  });

  const editMutation = useMutation({
    mutationFn: async ({
      id,
      burger,
    }: {
      id: number | undefined;
      burger: BurgerType;
    }): Promise<BurgerType> => {
      await new Promise((r) => setTimeout(r, 300));
      return { ...burger, id };
    },
    onSuccess: (updated) => {
      queryClient.setQueryData<BurgerType[]>(BURGER_QUERY_KEYS.all, (old = []) =>
        old.map((b) => (b.id === updated.id ? updated : b))
      );
      if (updated.id != null) {
        queryClient.setQueryData(BURGER_QUERY_KEYS.detail(updated.id), updated);
      }
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: number | undefined): Promise<number | undefined> => {
      await new Promise((r) => setTimeout(r, 300));
      return id;
    },
    onSuccess: (id) => {
      queryClient.setQueryData<BurgerType[]>(BURGER_QUERY_KEYS.all, (old = []) =>
        old.filter((b) => b.id !== id)
      );
      if (id != null) {
        queryClient.removeQueries({ queryKey: BURGER_QUERY_KEYS.detail(id) });
      }
    },
  });

  const favoriteMutation = useMutation({
    mutationFn: async (id: number | undefined): Promise<number | undefined> => {
      await new Promise((r) => setTimeout(r, 150));
      return id;
    },
    onSuccess: (id) => {
      queryClient.setQueryData<BurgerType[]>(BURGER_QUERY_KEYS.all, (old = []) =>
        old.map((b) =>
          b.id === id ? { ...b, isFavorite: !b.isFavorite } : b
        )
      );
    },
  });

  return {
    burgerData,
    isLoading,
    error: error instanceof Error ? error.message : error ? String(error) : null,
    fetchBurgers,
    addBurger: (burger: BurgerType) => addMutation.mutateAsync(burger),
    editBurger: (id: number | undefined, burger: BurgerType) =>
      editMutation.mutateAsync({ id, burger }),
    deleteBurger: (id: number | undefined) => deleteMutation.mutateAsync(id),
    toggleFavorite: (id: number | undefined) => favoriteMutation.mutateAsync(id),
    isAdding: addMutation.isPending,
    isEditing: editMutation.isPending,
    isDeleting: deleteMutation.isPending,
  };
};

export default useBurger;
