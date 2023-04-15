import { QueryClientProvider } from '@tanstack/react-query';

import { queryClient } from '@/lib/react-query';

type GlobalProviderProps = {
  children: React.ReactNode;
};

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
