import { useState ,useEffect} from 'react';
import axios from'axios';
const CompanyList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [industryFilter, setIndustryFilter] = useState("");
    const [loading, setLoading] = useState(true);
      const [companyData,setcompanyData]=useState([]);


const [error, setError] = useState(null); 

 useEffect(()=>{
axios.get("https://69142073f34a2ff1170e4479.mockapi.io/companies/Companies")
  .then(response => {
    console.log(response.data)
   setcompanyData(response.data);
   setInterval(setLoading(false),1000)
   
  })
   
  .catch(error => {
    console.error("There was an error fetching the companies!", error);
    setLoading(false)
     setError(error)
  });
},[])

  const filteredList = companyData.filter(company =>
    company.CompanyName.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (locationFilter === "" || company.Location === locationFilter) &&
    (industryFilter === "" || company.Industry === industryFilter)
  );

  return (
    <div>
      <h2>Frontend Development</h2>

{/* Search by Name */}
      <input    
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />

      {/* Filter by Location */}
      <select value={locationFilter} onChange={e => setLocationFilter(e.target.value)}>
        <option value="">All Locations</option>
        <option value="Location 1">Location1</option>
        <option value="Location 2">Location2</option>
        <option value="Location 3">Location3</option>
           <option value="Location 4">Location4</option>
              <option value="Location 5">Location5</option>
                 <option value="Location 6">Location6</option>
                    <option value="Location 7">Location7</option>
                       <option value="Location 8">Location8</option>
                          <option value="Location 9">Location9</option>
                             <option value="Location 10">Location10</option>
      </select>

      {/*  Filter by Industry */}
      <select value={industryFilter} onChange={e => setIndustryFilter(e.target.value)}>
        <option value="">All Industries</option>
        <option value="Industry 1">Industry1</option>
        <option value="Industry 2">Industry2</option>
        <option value="Industry 3">Industry3</option>
                <option value="Industry 4">Industry4</option>

        <option value="Industry 5">Industry5</option>

        <option value="Industry 6">Industry6</option>

        <option value="Industry 7">Industry7</option>

        <option value="Industry 8">Industry8</option>

        <option value="Industry 9">Industry9</option>

        <option value="Industry 10">Industry10</option>

      </select>

      
      {/*  Table */}
      { loading ? (
        <p>Loading companies...</p>
      ) : error ? ( 
        <p style={{ color: "red" }}>Failed to load companies.</p>
      ) : filteredList.length === 0 ? (
        <p>No matching data found.</p>
      ) :(
      <table border="1" style={{ marginTop: "10px" }} className="table-data">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Location</th>
            <th>Industry</th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map(company => (
            <tr key={company.id}>
              <td>{company.id}</td>
              <td>{company.CompanyName}</td>
              <td>{company.Location}</td>
              <td>{company.Industry}</td>
            </tr>
          ))}
        </tbody>
      </table>)}
    </div>
  );
};

export default CompanyList;
