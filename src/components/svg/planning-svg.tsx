export type PlanningSVGProps = {
  stroke?: string;
};

export default function PlanningSVG({ stroke = 'white' }: PlanningSVGProps): JSX.Element {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M42 16H6M16 10V6.00002M32 10V6M10 8.00002H9.8C7.70132 8.00002 6 9.70134 6 11.8V36C6 38.2092 7.79086 40 10 40H38C40.2092 40 42 38.2092 42 36V11.8C42 9.70134 40.2986 8.00002 38.2 8.00002H38M22 8.00002H26" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
