import MemberGroups from "./auxiliars/memberGroups.interface.js";

export default interface Member {
  id: number;
  name: string;
  state: string;
  cvUrl?: string;
  groups: MemberGroups[];
}
