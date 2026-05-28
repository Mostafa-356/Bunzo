import { useState, useCallback } from 'react';

export interface Toast {
  id: string;
  title?: string;
  description?: string;
  variant?: 'default' | 'destructive' | 'success';
  duration?: number;
}

interface ToastState {
  toasts: Toast[];
}

let toastCount = 0;

function generateId(): string {
  toastCount += 1;
  return `toast-${toastCount}`;
}

// Global toast state
let globalState: ToastState = { toasts: [] };
const listeners: Array<(state: ToastState) => void> = [];

function updateGlobalState(newState: ToastState) {
  globalState = newState;
  listeners.forEach(listener => listener(newState));
}

function addToast(toast: Omit<Toast, 'id'>): string {
  const id = generateId();
  const newToast: Toast = {
    ...toast,
    id,
    duration: toast.duration ?? 5000,
  };

  const newState = {
    toasts: [...globalState.toasts, newToast],
  };

  updateGlobalState(newState);

  // Auto-remove toast after duration
  if (newToast.duration && newToast.duration > 0) {
    setTimeout(() => {
      removeToast(id);
    }, newToast.duration);
  }

  return id;
}

function removeToast(id: string) {
  const newState = {
    toasts: globalState.toasts.filter(toast => toast.id !== id),
  };
  updateGlobalState(newState);
}

function clearAllToasts() {
  updateGlobalState({ toasts: [] });
}

export function useToast() {
  const [state, setState] = useState<ToastState>(globalState);

  // Subscribe to global state changes
  useState(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  });

  const toast = useCallback((toastData: Omit<Toast, 'id'>) => {
    return addToast(toastData);
  }, []);

  const dismiss = useCallback((id: string) => {
    removeToast(id);
  }, []);

  const clear = useCallback(() => {
    clearAllToasts();
  }, []);

  return {
    toasts: state.toasts,
    toast,
    dismiss,
    clear,
  };
}

// Convenience methods
export const toast = {
  success: (message: string, title?: string) => 
    addToast({ description: message, title, variant: 'success' }),
  
  error: (message: string, title?: string) => 
    addToast({ description: message, title, variant: 'destructive' }),
  
  info: (message: string, title?: string) => 
    addToast({ description: message, title, variant: 'default' }),
  
  custom: (toastData: Omit<Toast, 'id'>) => 
    addToast(toastData),
};