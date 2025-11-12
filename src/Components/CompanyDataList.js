// CompanyDataList.js
import { useContext } from "react";
import { CompanyContext } from "./CompanyContext";

const CompanyDataList = () => {
  const { filteredList, loading, error } = useContext(CompanyContext);

  if (loading) return <p>Loading companies...</p>;
  if (error) return <p style={{ color: "red" }}>Failed to load companies.</p>;
  if (filteredList.length === 0) return <p>No matching data found.</p>;

  return (
    <table border="1" style={{ marginTop: "10px" }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Location</th>
          <th>Industry</th>
        </tr>
      </thead>
      <tbody>
        {filteredList.map((company) => (
          <tr key={company.id}>
            <td>{company.id}</td>
            <td>{company.CompanyName}</td>
            <td>{company.Location}</td>
            <td>{company.Industry}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CompanyDataList;
