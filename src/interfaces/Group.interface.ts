import StrategicPlan from "./auxiliars/strategicPlan.interface.js";

export default interface Group {
  id: number;
  groupId: string;
  name: string;
  formationDate: Date;
  groupLocation: {
    department: string;
    city: string;
  };
  leader: string;
  isCertified: boolean;
  website?: string;
  url: string;
  email: string;
  ranking: string;
  knowledgeArea: string;
  mainScienceProgram: string;
  secondaryScienceProgram: string;
  strategicPlan: StrategicPlan;
  investigationLines: string[];
}
