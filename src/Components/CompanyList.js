// CompanyList.js
import { CompanyProvider } from "./CompanyContext";
import FilterData from "./FilterData";
import CompanyDataList from "./CompanyDataList";

const CompanyList = () => {
  return (
    <CompanyProvider>
      <div>
        <h2>Frontend Development</h2>
        <FilterData />
        <CompanyDataList />
      </div>
    </CompanyProvider>
  );
};

export default CompanyList;
