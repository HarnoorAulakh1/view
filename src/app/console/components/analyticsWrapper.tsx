"use client";
import React, { createContext,useState } from "react";

export const analyticsContext = createContext<{
  analytics: {
    live_users: number;
    new_signups: number;
    total_users: number[];
  };
  dispatch: React.Dispatch<
    React.SetStateAction<{
      live_users: number;
      new_signups: number;
      total_users: number[];
    }>
  >;
}>({
  analytics: {
    live_users: 0,
    new_signups: 0,
    total_users: [],
  },
  dispatch: () => {},
});

function AnalyticsWrapper({ children }: { children: React.ReactNode }) {
    const [analytics, setter] = useState<{
        live_users: number;
        new_signups: number;
        total_users: number[];
    }>({
        live_users: 0,
        new_signups: 0,
        total_users: [],
    });

  return (
    <analyticsContext.Provider value={{ analytics, dispatch: setter }}>
      {children}
    </analyticsContext.Provider>
  );
}

export default AnalyticsWrapper;
