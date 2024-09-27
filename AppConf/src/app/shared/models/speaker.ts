import {Social} from "./social";
import {Badge} from "./badge";

export interface Speaker {
  id?: number;
  name?: string;
  featured?: boolean;
  company?: string;
  companyLogo?: string;
  country?: string;
  photoUrl?: string;
  shortBio?: string;
  bio?: string;
  tags?: string[];
  badges?: Badge[];
  socials?: Social[];
}
