import { TechnologyVersion } from './technology_version'
export class Technology {
    _id: string;
    name: string;
    category: string;
    note?: string;
    versions: TechnologyVersion[];
}