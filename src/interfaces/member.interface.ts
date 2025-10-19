import MemberGroups from "./auxiliars/memberGroups.interface";

export default interface Member {
  id: number;
  name: string;
  state: string;
  cvUrl?: string;
  groups: MemberGroups[];
}
