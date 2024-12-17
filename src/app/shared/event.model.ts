export interface CalendarEvent {
    id?: string;
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    createdBy: string;
    type: 'online' | 'presential' | 'recorded';
    participants?: string[];
    status: 'active' | 'cancelled' | 'completed';
    location?: string;
  }