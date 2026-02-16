export interface EventListProps {
  title: string;
  start: Date;
  end: Date;
}

export type EventCalendarTypeFields = 'title' | 'start' | 'hour'  | 'duration'  

export interface EventCalendarForm {title: string, subtitle: string, placeholder: string, icon: React.ReactNode, maxlenght?: number, mask?: string, type: string, min?: string, max?: string}

export interface ConflictDayProps {
  has: boolean
  title: string
}