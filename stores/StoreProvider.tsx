"use client";

import { useEffect } from "react";
import { useTheme } from "./useTheme/useTheme";

/**
 * 전역 Zustand Store Provider
 * 주의: Zustand는 기본적으로 Provider가 필요 없습니다.
 * 이 Provider는 persist middleware를 사용할 때 SSR hydration 문제를 해결하고,
 * 스토어별 초기화 로직을 실행하기 위해 사용
 * 모든 스토어의 초기화 로직을 여기에 모아서 관리
 */
export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();

  useEffect(() => {
    // 테마 변경 시 DOM에 적용
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return <>{children}</>;
};
