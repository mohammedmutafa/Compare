export type Forecast = {
  time: number,
  temperature: number,
  windBearing: number,
  windSpeed: number,
  summary: ?string,
  icon: ?string
};

export type ChangeHandler = (date: Date) => void;
