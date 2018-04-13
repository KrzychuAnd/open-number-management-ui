import { Resource } from './../resource/resource';
import { ResourceStatus } from './../resource_status/resource-status';
export class ResourceHistory {
    sourceStatusId: number;
    sourceStatus?: ResourceStatus;
    targetStatusId: number;
    targetStatus?: ResourceStatus;
    oldRelResId?: any;
    oldRelatedResource?: Resource;
    newRelResId?: any;
    newRelatedResource?: Resource;
    oldDescr?: any;
    newDescr?: any;
    rowAddedUser: string;
    rowAddedDttm: Date;
}
