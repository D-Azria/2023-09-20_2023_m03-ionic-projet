import {Speaker} from "./speaker";

export interface Session {
  id?: number;
  title?: string;
  titleMobile?: string;
  image?: string;
  description?: string;
  type?: string;
  tags?: string;
  language?: string;
  category?: string;
  complexity?: string;
  track?: string;
  speakers?: number[];
}

