import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";

interface User{
  _id: string,
  name: string
}

 interface CalendarEvent {
  _id: number;
  title: string;
  notes: string;
  start: Date;
  end: Date;
  bgColor: string;
  user: User;
}

interface CalendarState {
  events: CalendarEvent[];
  activeEvent: CalendarEvent | null;
}

const tempEvent : CalendarEvent = {
  _id: new Date().getTime(),
  title: 'Cumpleaños',
  notes: 'Hay que comprar el pastel',
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: '#fafafa',
  user: {
    _id: '123',
    name: 'LUX'
  }
};

const initialState: CalendarState = {
  events: [tempEvent],
  activeEvent: null
};

export const calendarSlice= createSlice({
    name: 'calendar',
    initialState,
    reducers: {
       onSetActiveEvent: (state, {payload}) => {
            state.activeEvent = payload
       },
       onAddNewEvent : (state, {payload}) => {
        state.events.push(payload);
        state.activeEvent =null;
       },
       onUpdateEvent: (state, {payload}) => {
          state.events.map(event => {

              if(event._id === payload._id){
                return payload;
              }

            return event;
          });
       },
       onDeleteEvent:(state) => {
         if(state.activeEvent){
          state.events = state.events.filter((event) => event._id !== state?.activeEvent?._id);
          state.activeEvent = null;
         }
       }  
    }
});

export const {onSetActiveEvent, onAddNewEvent, onUpdateEvent, onDeleteEvent} = calendarSlice.actions;