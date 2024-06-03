interface Schedule {
  scheduleId: string;
  userId: string;
  date: string;
  startHour: number;
  message: string;
  createAt: number; // timestamp
}

interface UserSchedules {
  SchedulesCreateByMe: Schedule[];
  SchedulesCreateByOthers: Schedule[];
}

interface DailySchedule {
  [Hour: number]: boolean;
}

export interface SchedulesConfig {
  [Day: number]: DailySchedule;
}

interface ScheduleConfigsException {
  Timestamp: number;
  Settings: DailySchedule;
}

interface Coordinates {
  lat: number | null;
  lon: number | null;
}


export interface IUserData {
  userType: string | null;
  signUpEmail: string;
  signUpPassword: string;
  signUpConfirmPassword: string;
  name: string;
  lastName: string;
  cellNumber: string;
  organization: string;
  addressNumber: string;
  street: string;
  district: string;
  complement: string;
  description: string;
  tagsList: string[];
  schedulesConfigs: SchedulesConfig;
  schedulesConfigsExceptions: ScheduleConfigsException[];
  userSchedules: UserSchedules; // Add userSchedules to hold the created schedules
  coordinates: Coordinates | undefined; // Add coordinates property
  portfolio?: File; // Add portfolio property to hold the PDF file
  status: boolean;
  [Key: string]: any;
}