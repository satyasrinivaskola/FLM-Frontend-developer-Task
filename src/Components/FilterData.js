// FilterData.js
import { useContext } from "react";
import { CompanyContext } from "./CompanyContext";

const FilterData = () => {
  const {
    searchTerm,
    setSearchTerm,
    locationFilter,
    setLocationFilter,
    industryFilter,
    setIndustryFilter,
  } = useContext(CompanyContext);

  return (
    <div style={{ marginBottom: "15px" }}>
      {/* Search */}
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Location Filter */}
      <select
        value={locationFilter}
        onChange={(e) => setLocationFilter(e.target.value)}
      >
        <option value="">All Locations</option>
        {[...Array(10)].map((_, i) => (
          <option key={i} value={`Location ${i + 1}`}>
            Location{i + 1}
          </option>
        ))}
      </select>

      {/* Industry Filter */}
      <select
        value={industryFilter}
        onChange={(e) => setIndustryFilter(e.target.value)}
      >
        <option value="">All Industries</option>
        {[...Array(10)].map((_, i) => (
          <option key={i} value={`Industry ${i + 1}`}>
            Industry{i + 1}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterData;
