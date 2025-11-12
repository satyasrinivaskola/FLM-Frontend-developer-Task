// CompanyContext.js
import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CompanyContext = createContext();

export const CompanyProvider = ({ children }) => {
  const [companyData, setCompanyData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [industryFilter, setIndustryFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //  Fetch data from MockAPI
  useEffect(() => {
    axios
      .get("https://69142073f34a2ff1170e4479.mockapi.io/companies/Companies")
      .then((response) => {
        setCompanyData(response.data);
        setTimeout(() => setLoading(false), 800);
      })
      .catch((err) => {
        console.error("There was an error fetching the companies!", err);
        setError(err);
        setLoading(false);
      });
  }, []);

  //  Apply filters
  const filteredList = companyData.filter(
    (company) =>
      company.CompanyName?.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (locationFilter === "" || company.Location === locationFilter) &&
      (industryFilter === "" || company.Industry === industryFilter)
  );

  return (
    <CompanyContext.Provider
      value={{
        companyData,
        filteredList,
        searchTerm,
        setSearchTerm,
        locationFilter,
        setLocationFilter,
        industryFilter,
        setIndustryFilter,
        loading,
        error,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
};
