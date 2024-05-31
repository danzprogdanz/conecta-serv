export const userSchedulesModel = {
  SchedulesCreateByMe: [
    {
      scheduleId: "schedule_1",
      userId: "isjdsadsaiu23",
      date: "2024-06-01",
      startHour: 10,
      message: "Team meeting",
      createAt: 1685544000 // Example timestamp
    },
    {
      scheduleId: "schedule_2",
      userId: "isjdsadsaiu23",
      date: "2024-06-02",
      startHour: 14,
      message: "Project discussion",
      createAt: 1685630400 // Example timestamp
    }
  ],
  SchedulesCreateByOthers: [
    {
      scheduleId: "schedule_3",
      userId: "otheruser123",
      date: "2024-06-03",
      startHour: 9,
      message: "Client call",
      createAt: 1685716800 // Example timestamp
    },
    {
      scheduleId: "schedule_4",
      userId: "otheruser456",
      date: "2024-06-04",
      startHour: 16,
      message: "Team building activity",
      createAt: 1685803200 // Example timestamp
    }
  ]
}

export const userSchedulesDefault = {
  SchedulesCreateByMe: [],
  SchedulesCreateByOthers: []
}