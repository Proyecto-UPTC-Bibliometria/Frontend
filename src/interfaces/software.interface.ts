export default interface Software {
  id: number;
  isValidated: boolean;
  type: string;
  name: string;
  country: string;
  year: number;
  tradeName: string;
  projectName: string;
  fundingInstitution: string;
  authors: string[];
  group: string;
}
