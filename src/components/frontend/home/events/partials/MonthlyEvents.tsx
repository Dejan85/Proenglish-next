import React from "react";
import {
  ContentContainer,
  Heading,
  CalendarInfo,
  Text,
} from "src/components/ui";
import { Scrollbars } from "react-custom-scrollbars";
import uniqid from "uniqid";
import { EventTypes, RenderProps, UiRenderProps } from "../types";
import { useRouter } from "next/router";
import Link from "next/link";

const Render = (props: RenderProps): JSX.Element => {
  const { filteredEvents } = props;
  return (
    <>
      {filteredEvents?.length ? (
        filteredEvents.map((event: EventTypes): JSX.Element => {
          const { time, title, date } = event;

          return (
            <CalendarInfo key={uniqid()}>
              <CalendarInfo.Card date={date} />
              <CalendarInfo.Info time={time} title={title} />
            </CalendarInfo>
          );
        })
      ) : (
        <Text as="p">Nema događaja danas.</Text>
      )}
    </>
  );
};

const MonthlyEvents = (props: UiRenderProps): JSX.Element => {
  const {
    filteredActiveEventsDates: { filteredEvents },
  } = props;
  const router = useRouter();

  return (
    <ContentContainer className="home-events__monthly-events">
      <Heading className="home-events__calendar-heading" as="h4">
        Mesečni događaji
      </Heading>

      <Scrollbars
        style={{ marginTop: "6.2rem" }}
        renderThumbVertical={() => <div style={{ background: "#474642" }} />}
      >
        <Render filteredEvents={filteredEvents} />
      </Scrollbars>
      <Link href="/dogadjaji">
        <a className="home-events__link">Vidi Detaljno</a>
      </Link>
    </ContentContainer>
  );
};

export default MonthlyEvents;
