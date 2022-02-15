import { useState } from "react";
import { createContext, ReactNode, useContext } from "react";

type configContextType = {
  selectedConfiguration: IStageDetails[];
  setCurrentStage: (stage: IStageDetails) => void;
};

const configContextDefaultValues: configContextType = {
  selectedConfiguration: [],
  setCurrentStage: (stage: IStageDetails) => {},
};

const ConfigContext = createContext<configContextType>(
  configContextDefaultValues
);

export function useCarConfiguration() {
  return useContext(ConfigContext);
}

type Props = {
  children: ReactNode;
};

export function CarConfigurationProvider({ children }: Props) {
  const [selectedConfiguration, setSelectedConfiguration] = useState<
    IStageDetails[]
  >([]);
  const setCurrentStage = (stage: IStageDetails) => {
    const clone = [...selectedConfiguration];
    const currentIndex = clone.findIndex((p) => p.type === stage.type);
    if (currentIndex > -1) {
      clone[currentIndex] = stage;
    } else {
      clone.push(stage);
    }
    setSelectedConfiguration(clone);
  };
  const value = {
    selectedConfiguration,
    setCurrentStage,
  };
  return (
    <>
      <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>
    </>
  );
}

interface IStageDetails {
  type: "color" | "upholstery" | "wheel" | "trim";
  thumbImage: string;
  stageName: string;
}
