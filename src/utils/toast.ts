import { ref } from "vue";

interface Toast {
  id: number;
  message: string;
  closing: boolean;
}

const toasts = ref<Toast[]>([]);

export const useToasts = () => {
  const addToast = (message: string, duration = 3000): void => {
    const id = Date.now();
    const newToast: Toast = { id, message, closing: false };
    toasts.value.push(newToast);

    setTimeout(() => {
      const index = toasts.value.findIndex((toast) => toast.id === id);
      if (index !== -1) {
        toasts.value[index].closing = true;
        setTimeout(() => {
          toasts.value.splice(index, 1);
        }, 300);
      }
    }, duration);
  };

  return { toasts, addToast };
};
