export type UserSVGProps = {
  stroke?: string;
};

export default function UserSVG({ stroke = 'white' }: UserSVGProps): JSX.Element {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.9996 22.5C14.2366 22.5 9.38443 26.4 7.93853 31.7048C7.45442 33.481 8.99203 35 10.833 35H29.1663C31.0072 35 32.5449 33.481 32.0608 31.7048C30.6149 26.4 25.7627 22.5 19.9996 22.5Z"
        stroke={stroke} strokeWidth="2" strokeLinecap="round"
      />
      <path
        d="M25.8329 11.6666C25.8329 14.8883 23.2212 17.4999 19.9995 17.4999C16.7779 17.4999 14.1663 14.8883 14.1663 11.6666C14.1663 8.44492 16.7779 5.83325 19.9995 5.83325C23.2212 5.83325 25.8329 8.44492 25.8329 11.6666Z"
        stroke={stroke} strokeWidth="2" strokeLinecap="round"
      />
    </svg>
  );
}
