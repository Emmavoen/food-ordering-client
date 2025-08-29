import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import UserLayout from "./layouts/user-layout";
import HomePage from "./pages/HomePage";
import Auth0ProviderWithNavigation from "./auth/Auth0ProviderWithNavigation";
import { QueryClient, QueryClientProvider } from "react-query";
import AuthCallbackPage from "./pages/AuthCallbackPage";
const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Auth0ProviderWithNavigation>
          <Routes>
            <Route path="/" element={<UserLayout />}>
              <Route index element={<HomePage />} />
              <Route path="/auth-callback" element={<AuthCallbackPage />} />
              <Route path="/profile" element={<span>Profile</span>} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Auth0ProviderWithNavigation>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
