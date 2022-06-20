export enum ModuleKeys {
  Name = 'name',
  Description = 'description',
  Steps = 'steps',
}

export interface Module {
  [ModuleKeys.Name]: string;
  [ModuleKeys.Description]: string;
  [ModuleKeys.Steps]: number;
}

export enum ModuleItemKeys {
  Id = 'id',
  NotificationText = 'notificationText',
  Title = 'title',
  UscreenUrl = 'uscreenUrl',
  Step = "step",
}

export interface ModuleItem {
  [ModuleItemKeys.Id]: string;
  [ModuleItemKeys.NotificationText]: string;
  [ModuleItemKeys.Title]: string;
  [ModuleItemKeys.UscreenUrl]?: string;
  [ModuleItemKeys.Step]: number;
}