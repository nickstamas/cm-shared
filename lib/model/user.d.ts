import * as FirebaseFirestore from "@firebase/firestore-types";
export declare enum UserKeys {
    AllowsDailyNotification = "allowsDailyNotification",
    CompletedModules = "completedModules",
    DailyItemId = "dailyItemId",
    DailyNotificationMinute = "dailyNotificationMinute",
    Id = "id",
    IsActive = "isActive",
    IsOnboarding = "isOnboarding",
    JoinedMembersGroupAt = "joinedMembersGroupAt",
    LastDailyNotificationSentAt = "lastDailyNotificationSentAt",
    LastStreakActivityAt = "lastStreakActivityAt",
    LastTickAt = "lastTickAt",
    Module = "module",
    SmallGroupChatId = "smallGroupChatId",
    StreakCount = "streakCount",
    Stats = "stats",
    TelegramLinkKey = "telegramLinkKey",
    TelegramId = "telegramId",
    TelegramFirstName = "telegramFirstName",
    TelegramLastName = "telegramLastName",
    Timezone = "timezone",
    UscreenUserId = "uscreenUserId",
    UscreenCountry = "uscreenCountry",
    UscreenEmail = "uscreenEmail",
    UscreenNickname = "uscreenNickname",
    UscreenName = "uscreenName"
}
export declare enum UserModuleKeys {
    ModuleId = "moduleId",
    ModuleItemId = "moduleItemId",
    Step = "step",
    Timestamp = "timestamp",
    FurthestStep = "furthestStep"
}
export declare enum StatsKeys {
    StreakCount = "streakCount",
    WatchTime = "watchTime",
    WatchCount = "watchCount"
}
export interface UserModule {
    [UserModuleKeys.ModuleId]: string;
    [UserModuleKeys.ModuleItemId]: string;
    [UserModuleKeys.Step]: number;
    [UserModuleKeys.FurthestStep]: number;
    [UserModuleKeys.Timestamp]: FirebaseFirestore.Timestamp;
}
export interface Stats {
    [StatsKeys.StreakCount]?: number | FirebaseFirestore.FieldValue;
    [StatsKeys.WatchTime]?: number | FirebaseFirestore.FieldValue;
    [StatsKeys.WatchCount]?: number | FirebaseFirestore.FieldValue;
}
export interface User {
    [UserKeys.Id]?: string;
    [UserKeys.StreakCount]?: number | FirebaseFirestore.FieldValue;
    [UserKeys.LastStreakActivityAt]?: FirebaseFirestore.Timestamp;
    [UserKeys.UscreenUserId]?: string;
    [UserKeys.UscreenEmail]?: string;
    [UserKeys.UscreenNickname]?: string;
    [UserKeys.UscreenName]?: string;
    [UserKeys.UscreenCountry]?: string;
    [UserKeys.AllowsDailyNotification]?: boolean;
    [UserKeys.DailyNotificationMinute]?: number;
    [UserKeys.LastDailyNotificationSentAt]?: FirebaseFirestore.Timestamp;
    [UserKeys.TelegramLinkKey]?: string;
    [UserKeys.TelegramId]?: string;
    [UserKeys.TelegramFirstName]?: string;
    [UserKeys.TelegramLastName]?: string;
    [UserKeys.IsOnboarding]?: boolean;
    [UserKeys.Timezone]?: string;
    [UserKeys.Module]?: UserModule;
    [UserKeys.JoinedMembersGroupAt]?: FirebaseFirestore.Timestamp;
    [UserKeys.LastTickAt]?: FirebaseFirestore.Timestamp;
    [UserKeys.DailyItemId]?: string;
    [UserKeys.IsActive]?: boolean;
    [UserKeys.CompletedModules]?: string[];
    [UserKeys.Stats]?: Stats;
    [UserKeys.SmallGroupChatId]?: string;
}
