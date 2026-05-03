import { useDispatch, useSelector } from 'react-redux';
import { onSetActiveEvent } from '../store/calendar/calendarSlice';

export const useCalendarStore = () => {

    const dispatch= useDispatch();
    const {events, activeEvent} = useSelector((state : any) => state?.calendar);

    const setActiveEvent= (calendarEvent : any) => {
        dispatch(onSetActiveEvent(calendarEvent));
    }

  return {
        //Propiedades
        activeEvent,
        events,

        //Metodos
        setActiveEvent
  }
}
