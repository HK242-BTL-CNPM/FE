import { useState, useEffect } from "react";
import "./calendar.scss";
import events from "./event";
import Header  from "../user/component/header";
import Footer  from "../user/component/footer";
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
      <Link to="../">
        <h1 className="text-lg font-semibold pl-20 pt-2 text-[#5D6675] inline-block ">
          {" "}
          &gt; Trang chủ
        </h1>
      </Link>
      <Link to="../history">
        <h1 className="text-lg font-semibold pl-1 pt-2 text-[#5D6675] inline-block ">
          {" "}
          &gt; Lịch sử đặt phòng
        </h1>
      </Link>
      <div className="sx-react-calendar-wrapper mx-auto pt-2">
        <ScheduleXCalendar calendarApp={calendar} />
      </div>
      <Footer/>
    </>
  );
}

export default History;
