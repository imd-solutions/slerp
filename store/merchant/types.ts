export interface Merchant {
  id: string;
  name: string;
  slug: string;
  stores: [Store]
}

interface Store {
  id: string;
  is_open: string;
  email: string;
  is_warehouse: string;
  slug: string;
  operating_schedules: Schedules;
}

interface Schedules {
  id: string;
  monday: Day;
  tuesday: Day;
  wednesday: Day;
  thursday: Day;
  friday: Day;
  saturday: Day;
  sunday: Day;
}

interface Day {
  id: string;
  end: string;
  start: string;
  enabled: boolean;
  special_date: string;
}
