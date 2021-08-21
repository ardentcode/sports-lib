import { DataJSONInterface } from '../data/data.json.interface';
import { Privacy } from '../privacy/privacy.class.interface';
import { ActivityJSONInterface } from '../activities/activity.json.interface';

export interface EventJSONInterface {
  id?: string;
  name: string;
  description: string | null;
  isMerge: boolean;
  privacy: Privacy;
  startDate: number;
  endDate: number;
  stats: DataJSONInterface;
  activities: ActivityJSONInterface[];
}
