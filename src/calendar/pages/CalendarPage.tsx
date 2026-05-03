import { Calendar} from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useState } from 'react';
import { Navbar } from "../components/Navbar";
import { getMessagesEs, localizer } from '../../helpers';
import { CalendarEvent } from '../components/CalendarEvent';
import { CalendarModal } from '../components/CalendarModal';
import { useUiStore } from '../../hooks/useUiStore';
import { useCalendarStore } from '../../hooks/useCalendarStore';
import { FabAddNew } from '../components/FabAddNew';

export const CalendarPage = () => {

    const {openDateModal} = useUiStore();
    const {events, setActiveEvent} = useCalendarStore()
    const [lastView, serLastView] = useState(localStorage.getItem('lastView') || 'week');  

    const eventStyleGetter= () => {
        //  event: object, start: object, end: object, inSelected: object
        // console.log({event, start, end, inSelected});
        
        const style= {
          backgroundColor: '#347CF7',
          opacity: 0.8,
          color:'white'
        }

        return {
          style
        }
    }

    const onDoubleClick= (event : string) => {
        console.log( event);
        openDateModal();
    } 

      const onSelect= (event: string) => {
        setActiveEvent(event);
    } 

      const onViewChanged= (event: string) => {
        localStorage.setItem('lastView', event);
        serLastView(event)
    } 

  return (
   <>
    <Navbar/>
    <Calendar
      culture='es'
      localizer={localizer}
      events={events}
      defaultView={lastView}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 'calc(100vh - 80px)' }}
      messages= {getMessagesEs()}
      eventPropGetter={eventStyleGetter}
      components={{
        event: CalendarEvent
      }}
      onDoubleClickEvent={onDoubleClick}
      onSelectEvent={onSelect}
      onView={onViewChanged}
    />

    <CalendarModal/>
    <FabAddNew/>
   </>
  )
}
