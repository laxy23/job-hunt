"use client";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

type Experience = string[];
type Skills = string[];

interface Job {
  _id: string;
  jobTitle: string;
  companyName: string;
  logo: string;
  description: string;
  location: string;
  salary: number;
  type: string;
  experience: Experience;
  skills: Skills;
  user: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface ContextProps {
  jobData: Job[];
  setJobData: Dispatch<SetStateAction<Job[]>>;
  getAllJobs: () => Promise<void>;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  totalPages: number | null;
  setTotalPages: Dispatch<SetStateAction<number | null>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const GlobalContext = createContext<ContextProps>({
  jobData: [],
  setJobData: (): Job[] => [],
  getAllJobs: async () => {},
  currentPage: 1,
  setCurrentPage: () => {},
  totalPages: null,
  setTotalPages: () => {},
  loading: true,
  setLoading: () => {},
});

export const GlobalContextProvider = ({ children }: any) => {
  const [jobData, setJobData] = useState<[] | Job[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState<number | null>(1);
  const [loading, setLoading] = useState(true);

  const getAllJobs = async () => {
    const res = await fetch(`/api/job?page=${currentPage}&pageSize=3`);

    const data = await res.json();

    setJobData(data.jobs);
    setTotalPages(data.totalPages);
    setLoading(false);
  };

  return (
    <GlobalContext.Provider
      value={{
        jobData,
        setJobData,
        getAllJobs,
        currentPage,
        setCurrentPage,
        totalPages,
        setTotalPages,
        loading,
        setLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
