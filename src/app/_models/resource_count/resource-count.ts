import { ResourceStatus } from './../resource_status/resource-status';
import { ResourceType } from './../resource_type/resource-type';
export class ResourceCount {
    resTypeId: number;
    resStatusId: number;
    count: number;
    resourceType: ResourceType;
    resourceStatus: ResourceStatus;
}
