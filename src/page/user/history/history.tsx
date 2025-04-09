import { useState, useEffect } from "react";
import "./calendar.scss";
import events from "./event";
import Header  from "../component/header";
import Footer  from "../component/footer";
import { useCalendarApp, ScheduleXCalendar } from "@schedule-x/react";
import {
  createViewDay,
  createViewMonthAgenda,
  createViewMonthGrid,
  createViewWeek,
} from "@schedule-x/calendar";
import { createEventsServicePlugin } from "@schedule-x/events-service";

import "@schedule-x/theme-default/dist/index.css";
import { createEventModalPlugin } from "@schedule-x/event-modal";
//import { createDragAndDropPlugin } from "@schedule-x/drag-and-drop";
import { Link } from "react-router-dom";

function History() {
  const eventsService = useState(() => createEventsServicePlugin())[0];

  const calendar = useCalendarApp({
    views: [
      createViewDay(),
      createViewWeek(),
      createViewMonthGrid(),
      createViewMonthAgenda(),
    ],
    events: events,
    plugins: [
      eventsService,
      createEventModalPlugin(),
      // createDragAndDropPlugin()
    ],
  });

  useEffect(() => {
    // get all events
    eventsService.getAll();
  }, []);
  return (
    <>
      <Header />
      <div className="pt-8 pl-8 text-2xl pb-4 font-semibold">
        Lịch sử đặt phòng
      </div>
      <div className="sx-react-calendar-wrapper mx-auto pt-2 px-2">
        <ScheduleXCalendar calendarApp={calendar} />
      </div>
      <Footer/>
    </>
  );
}

export default History;
