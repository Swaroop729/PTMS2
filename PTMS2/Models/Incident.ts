import { IIncidents} from '../Interfaces/Incidents'


export class Incident implements IIncidents{
    Id: number;
    IncidentId: string;
    Percentage: number;
    Comment: string;
    ApplicationName: string;
    CreatedDate: Date;
    ModifiedDate: Date;
    ResolutionDate: Date;
    IncidentPriority:number;
    TrackerRef:number;

}