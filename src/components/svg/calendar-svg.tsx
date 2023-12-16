export type CalendarSVGProps = {
  stroke?: string;
};

export default function CalendarSVG({ stroke = 'black' }: CalendarSVGProps): JSX.Element {
  return (
    <svg width="18" height="15" viewBox="0 0 18 15" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <path
        d="M17 4.82354H1M5.44444 2.52942V1.00001M12.5556 2.52941V1M2.77778 1.76471H2.68889C1.75614 1.76471 1 2.41522 1 3.21765V12.4706C1 13.3153 1.79594 14 2.77778 14H15.2222C16.2041 14 17 13.3153 17 12.4706V3.21765C17 2.41522 16.2438 1.76471 15.3111 1.76471H15.2222M8.11111 1.76471H9.88889"
        stroke={stroke} strokeLinecap="round"
      />
    </svg>
  );
}
