import { useState, useEffect } from "react";
import { BurgerService } from "../services/burgerService";
import { BurgerType } from "../types/burger";

const useBurger = () => {
  const [burgerData, setBurgerData] = useState<BurgerType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchBurgers = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await BurgerService.getAllBurgers();
      setBurgerData(data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred while fetching burgers.");
      }
      console.error("Error fetching burgers:", error);
    } finally {
      setIsLoading(false);
    }
  };


  const addBurger = async (burger: BurgerType): Promise<BurgerType | null> => {
    setError(null);
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const newBurger = {
        ...burger,
        id: Math.max(...burgerData.map(r => r.id || 0)) + 1
      };
      
      setBurgerData((prevBurgers) => [...prevBurgers, newBurger]);
      return newBurger;
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred while adding the burger.");
      }
      console.error("Error adding burger:", error);
      return null;
    } finally {
      console.log("Burger added successfully");
    }
  };

  const editBurger = async (
    id: number | undefined,
    burger: BurgerType
  ): Promise<BurgerType | void> => {
    setError(null);
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const updatedBurger = { ...burger, id };
      setBurgerData((prevBurgers) =>
        prevBurgers.map((r) => (r.id === id ? updatedBurger : r))
      );
      return updatedBurger;
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred while editing the burger.");
      }
      console.error("Error editing burger:", error);
    } finally {
      console.log("Burger edited successfully");
    }
  };

  const deleteBurger = async (id: number | undefined): Promise<boolean> => {
    setError(null);
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 300));
      
      setBurgerData((prevBurgers) =>
        prevBurgers.filter((burger) => burger.id !== id)
      );
      return true;
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred while deleting the burger.");
      }
      console.error("Error deleting burger:", error);
      return false;
    } finally {
      console.log("Burger deleted successfully");
    }
  };

  const toggleFavorite = async (
    id: number | undefined
  ): Promise<BurgerType | null> => {
    setError(null);
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 300));
      
      let updatedBurger: BurgerType | null = null;
      setBurgerData((prevBurgers) =>
        prevBurgers.map((burger) => {
          if (burger.id === id) {
            updatedBurger = { ...burger, isFavorite: !burger.isFavorite };
            return updatedBurger;
          }
          return burger;
        })
      );
      return updatedBurger;
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred while toggling favorite status.");
      }
      console.error("Error toggling favorite status:", error);
      return null;
    } finally {
      console.log("Burger favorite status toggled successfully");
    }
  };

  useEffect(() => {
    fetchBurgers();
  }, []);

  return {
    burgerData,
    isLoading,
    error,
    fetchBurgers,
    addBurger,
    editBurger,
    deleteBurger,
    toggleFavorite,
  };
};

export default useBurger;
