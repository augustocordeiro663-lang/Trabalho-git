import { createBrowserRouter } from "react-router";
import HomePage from "../Pages/HomePage/HomePage";
import SearchPage from "../Pages/SearchPage/SearchPage";
import CompanyPage from "../Pages/CompanyPage/CompanyPage";
import App from "../App";
import DesignPage from "../Pages/DesignPage/DesignPage";
import CompanyProfile from "../Components/CompanyProfile/CompanyProfile";
import IncomeStatement from "../Components/IncomeStatement/IncomeStatement";
import BalanceSheet from "../Components/BalanceSheet/BalanceSheet";
import CashFlowStatement from "../Components/CashFlowStatement/CashFlowStatement";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "search", element: <SearchPage /> },
      { path: "design-guide", element: <DesignPage /> },
      {
        path: "company/:ticker",
        element: <CompanyPage />,
        children: [
          { index: true, element: <CompanyProfile /> },
          { path: "company-profile", element: <CompanyProfile /> },
          { path: "balance-sheet", element: <BalanceSheet /> },                    { path: "income-statement", element: <IncomeStatement /> },
          { path: "cashflow-statement", element: <CashFlowStatement/> },                    { path: "income-statement", element: <IncomeStatement /> },

        ],
      },
    ],
  },
]);