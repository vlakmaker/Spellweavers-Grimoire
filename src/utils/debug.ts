// src/utils/debug.ts

export const isDebug = import.meta.env.VITE_DEBUG === "true";

export function debugLog(...args: any[]) {
  if (isDebug) {
    console.log("[🔍 DEBUG]", ...args);
  }
}
