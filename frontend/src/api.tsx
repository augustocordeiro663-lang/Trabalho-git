import axios from "axios";
import { CompanyBalanceSheet, CompanyKeyMetrics, CompanyProfile, CompanySearch, CompanyTenk } from "./company";

const finnhubAxios = axios.create({
  headers: {
    Authorization: undefined
  }
});

finnhubAxios.interceptors.request.use((config) => {
  delete config.headers['Authorization'];
  return config;
});

interface SearchResponse {
  result: CompanySearch[];
}

interface MetricResponse {
  metric: CompanyKeyMetrics;
}

export const searchCompanies = async (query: string) => {
  try {
    const data = await finnhubAxios.get<SearchResponse>(
      `https://finnhub.io/api/v1/search?q=${query}&token=${process.env.REACT_APP_API_KEY}`
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message:", error.message);
      return error.message;
    } else {
      console.log("unexpected error:", error);
      return "An unexpected error has occurred.";
    }
  }
};

export const getCompanyProfile = async (symbol: string) => {
  try {
    const data = await finnhubAxios.get<CompanyProfile>(
      `https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=${process.env.REACT_APP_API_KEY}`
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message:", error.message);
      return error.message;
    } else {
      console.log("unexpected error:", error);
      return "An unexpected error has occurred.";
    }
  }
};

export const getIncomeStatement = async (query: string) => {
  try {
    const data = await finnhubAxios.get<MetricResponse>(
      `https://finnhub.io/api/v1/stock/metric?symbol=${query}&metric=all&token=${process.env.REACT_APP_API_KEY}`
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message:", error.message);
      return error.message;
    } else {
      console.log("unexpected error:", error);
      return "An unexpected error has occurred.";
    }
  }
};

export const getKeyMetrics = async (query: string) => {
  try {
    const data = await finnhubAxios.get<MetricResponse>(
      `https://finnhub.io/api/v1/stock/metric?symbol=${query}&metric=all&token=${process.env.REACT_APP_API_KEY}`
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message:", error.message);
      return error.message;
    } else {
      console.log("unexpected error:", error);
      return "An unexpected error has occurred.";
    }
  }
};

export const getBalanceSheet = async (query: string) => {
  try {
    const data = await finnhubAxios.get<CompanyBalanceSheet>(
      `https://finnhub.io/api/v1/stock/metric?symbol=${query}&metric=all&token=${process.env.REACT_APP_API_KEY}`
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message:", error.message);
      return error.message;
    } else {
      console.log("unexpected error:", error);
      return "An unexpected error has occurred.";
    }
  }
};

export const getTenk = async (query: string) => {
  try {
    const data = await finnhubAxios.get<CompanyTenk[]>(
      `https://finnhub.io/api/v1/stock/filings?symbol=${query}&token=${process.env.REACT_APP_API_KEY}`
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message:", error.message);
      return error.message;
    } else {
      console.log("unexpected error:", error);
      return "An unexpected error has occurred.";
    }
  }
};

export const getCompData = async (query: string) => {
  try {
    const data = await finnhubAxios.get<string[]>(
      `https://finnhub.io/api/v1/stock/peers?symbol=${query}&token=${process.env.REACT_APP_API_KEY}`
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message:", error.message);
      return error.message;
    } else {
      console.log("unexpected error:", error);
      return "An unexpected error has occurred.";
    }
  }
};