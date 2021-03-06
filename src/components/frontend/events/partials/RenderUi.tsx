import React, { useState } from "react";
import {
  ContentContainer,
  SubContainer,
  Heading,
  Text,
  Button,
} from "src/components/ui";
import { CalendarOfEventsWidget } from "src/widgets/index";
import { UiRenderProps } from "../types";
import DailyEventsProps from "./DailyEvents";
import WeeklyEvents from "./WeeklyEvents";
import MonthlyEvents from "./MonthlyEvents";

const RenderUi = (props: UiRenderProps): JSX.Element => {
  const {
    generateHighlhtDates,
    filteredActiveEventsDates,
    generateDailyEvents,
    filteredDailyEventsData,
    eventsData,
  } = props;
  const [active, setActive] = useState<string>("daily");
  const [searchedEvents, setSearchedEvents] = useState<object[]>();
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const { highlightDates, filteredEvents } = filteredActiveEventsDates;

  const onChange = (e: { target: { value: string } }) => {
    const searchTerm = e.target.value.toLowerCase();

    const searchedEvents =
      eventsData &&
      eventsData
        .filter((item: any) => {
          if (item.title.toLowerCase().includes(searchTerm)) {
            return item;
          }
        })
        .sort((a: any, b: any): any => {
          return a.date.slice(0, 2) - b.date.slice(0, 2);
        });

    setSearchedEvents(searchTerm ? searchedEvents : []);
  };

  const navHandler = (e: {
    target: { name: React.SetStateAction<string> };
  }) => {
    setActive(e.target.name);
  };

  return (
    <ContentContainer className="events">
      <SubContainer className="events__sub-container">
        <Heading className="events__heading" as="h1">
          Budite u toku nasih i vasih desavanja.
        </Heading>
        <>
          {active !== "weekly" && (
            <ContentContainer className="events__date-picker">
              <Text className="events__date-picker-heading" as="p">
                Izaberi daatum
              </Text>
              <CalendarOfEventsWidget
                highlightDates={highlightDates}
                generateHighlhtDates={generateHighlhtDates}
                generateDailyEvents={generateDailyEvents}
                setCurrentMonth={setCurrentMonth}
              />
            </ContentContainer>
          )}
        </>

        <ContentContainer className="events__nav">
          <Button
            onClick={navHandler}
            className={`events__nav-button ${
              active === "daily" && "events__nav-button-active"
            }`}
            type="button"
            name="daily"
          >
            Dnevni
          </Button>
          <Button
            onClick={navHandler}
            className={`events__nav-button ${
              active === "weekly" && "events__nav-button-active"
            }`}
            type="button"
            name="weekly"
          >
            Nedeljni
          </Button>
          <Button
            onClick={navHandler}
            className={`events__nav-button ${
              active === "monthly" && "events__nav-button-active"
            }`}
            type="button"
            name="monthly"
          >
            Mese??ni
          </Button>
        </ContentContainer>

        {active === "daily" ? (
          <ContentContainer className="events__search">
            <input
              className="events__search-input"
              onChange={onChange}
              placeholder="Pretra??i sve doga??aje"
            />
          </ContentContainer>
        ) : (
          <></>
        )}
        <Heading className="events__heading-h2" as="h2">
          De??avanja koja su trenutno aktuelna
        </Heading>
        <>
          {active === "daily" && (
            <DailyEventsProps
              events={searchedEvents || filteredDailyEventsData}
            />
          )}

          {active === "weekly" && <WeeklyEvents events={filteredEvents} />}

          {active === "monthly" &&
            filteredActiveEventsDates?.filteredEvents?.length && (
              <MonthlyEvents
                filteredActiveEventsDates={filteredActiveEventsDates}
                currentMonth={currentMonth}
              />
            )}
        </>
      </SubContainer>
    </ContentContainer>
  );
};

export default RenderUi;
