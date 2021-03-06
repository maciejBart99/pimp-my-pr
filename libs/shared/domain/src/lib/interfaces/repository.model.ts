import { PrStatistics } from './pr.statistics';

export interface RepositoryModel {
  name: string;
  fullName: string;
  owner: string;
  pictureUrl: string;
  prsStatistics: PrStatistics[];
}
