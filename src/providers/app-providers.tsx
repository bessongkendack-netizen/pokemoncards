'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';
import { useState, type ReactNode } from 'react';
export function AppProviders({children}:{children:ReactNode}){ const [client]=useState(()=>new QueryClient()); return <QueryClientProvider client={client}><ThemeProvider attribute="class" defaultTheme="system" enableSystem>{children}<Toaster richColors position="top-right" /></ThemeProvider></QueryClientProvider>; }
