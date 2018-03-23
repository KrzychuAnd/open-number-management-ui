import { ResourceStatus } from './../resource_status/resource-status';
import { ResourceType } from './../resource_type/resource-type';
import { ResourceHistory } from "../resource_history/resource-history";

export class Resource {
    id: number;
    href: string;
    name: string;
    resTypeId: number;
    resourceType: ResourceType = new ResourceType();
    resStatusId: number;
    resourceStatus: ResourceStatus = new ResourceStatus();
    descr: string;
    relResId?: any;
    relatedResource: Resource = new Resource();
    rowAddedUser: string;
    rowAddedDttm: Date;
    rowUpdatedUser: string;
    resourceHistories: ResourceHistory[] = new Array<ResourceHistory>();
}
