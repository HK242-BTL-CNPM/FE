import { useState, useEffect } from "react";
import "./calendar.scss";
import events from "./event";
import Header from "../component/header";
import Footer from "../component/footer";
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
import { BsClockHistory } from "react-icons/bs";

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
  }, [eventsService]);
  return (
    <>
      <Header />
      <div
        style={{
          padding: "1.5cm 4cm 2cm 4cm",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <BsClockHistory
            style={{
              fontSize: "45px",
              color: "#000",
              marginRight: "20px",
            }}
          />
          <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>
            Lịch sử đặt phòng
          </h1>
        </div>
        <div className="sx-react-calendar-wrapper mx-auto pt-2 px-2">
          <ScheduleXCalendar calendarApp={calendar} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default History;
