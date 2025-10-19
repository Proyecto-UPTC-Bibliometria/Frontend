export default interface Project {
  id: number;
  isValidated: boolean;
  name: string;
  startDate: Date;
  endDate: Date | null;
  status: string;
  group: string;
}
