// global.d.ts
export {};

declare global {
  interface Window {
    Tawk_API: {
      maximize: () => void;
      [key: string]: any;
    };
  }
}
