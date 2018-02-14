// app
import { EveStaticDataService } from './eve-static-data.service';
import { BlueprintService } from './blueprint.service';
import { ItemTypeService } from './item-type.service';
import { ItemGroupService } from './item-group.service';

export const EVE_DATA_PROVIDERS: Array<any> = [
  EveStaticDataService,
  BlueprintService,
  ItemTypeService,
  ItemGroupService
];

// services
export * from './eve-static-data.service';
export * from './blueprint.service';
export * from './item-type.service';
export * from './item-group.service';
