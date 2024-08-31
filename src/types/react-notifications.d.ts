declare module 'react-notifications' {
    export const NotificationContainer: React.ComponentType;
    export const NotificationManager: {
      success: (message: string, title?: string, timeOut?: number) => void;
      error: (message: string, title?: string, timeOut?: number) => void;
      warning: (message: string, title?: string, timeOut?: number) => void;
      info: (message: string, title?: string, timeOut?: number) => void;
    };
  }
  