export interface eventListProps {
  title: string;
  start: Date;
  end: Date;
}

export type eventCalendarTypeFields = 'title' | 'start' | 'hour'  | 'duration'  

export interface eventCalendarForm {title: string, subtitle: string, placeholder: string, icon: React.ReactNode, maxlenght?: number, mask?: string, type: string, min?: string, max?: string}

export interface ConflictDayProps {
  has: boolean
  title: string
}