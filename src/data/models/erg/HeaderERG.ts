import UnitsERG from "./UnitsERG";

interface HeaderERG {
  version: string;
  units: UnitsERG;
  parsedFileName: string;
  columns: string[];
  ftp?: number;
  description?: string;
}

export default HeaderERG