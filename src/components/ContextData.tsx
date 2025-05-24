import { createContext, useContext, useState } from "react";

type DataContextType = {
  sharedData: any; // có thể thay 'any' bằng kiểu cụ thể bạn muốn
  setSharedData: React.Dispatch<React.SetStateAction<any>>;
};

// ✅ Tạo context với kiểu rõ ràng (hoặc undefined ban đầu)
export const DataContext = createContext<DataContextType | undefined>(
  undefined
);

// ✅ Component provider
export const DataProviderContext: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [sharedData, setSharedData] = useState<any>(null);

  return (
    <DataContext.Provider value={{ sharedData, setSharedData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useShared = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useShared must be used within a DataProviderContext");
  }
  return context;
};
