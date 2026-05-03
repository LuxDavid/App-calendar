import { useSelector } from 'react-redux';

export const useCalendarStore = () => {

    const {events, activeEvent} = useSelector((state : any) => state?.calendar)

  return {
        activeEvent,
        events
  }
}
