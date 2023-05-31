const PlaySVGComponent = (props) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={75} height={75} {...props}>
    {props.dark === 'false' ? (
      <g fill='current' fillRule='evenodd'>
        <circle cx={37.5} cy={37.5} r={37.5} opacity={0.25} />
        <path d='M29 27v21l21-10.5z' />
      </g>
    ) : (
      <g fillRule='evenodd'>
        <circle cx={37.5} cy={37.5} r={37.5} opacity={1} fill='current' />
        <path d='M29 27v21l21-10.5z' fill='#fff' />
      </g>
    )}
  </svg>
);
export default PlaySVGComponent;
