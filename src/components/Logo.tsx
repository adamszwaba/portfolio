const Logo = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 85 92" {...props}>
      <mask
        id="mask0"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="43"
        width="43"
        height="49"
      >
        <rect
          y="43.7483"
          width="42.5"
          height="48.2517"
          className="dark:fill-slate-100 fill-slate-400"
        />
      </mask>
      <g mask="url(#mask0)">
        <path
          d="M42.5 46.6542L85 68.8454L42.5 91.0365L0 68.8454L42.5 46.6542Z"
          className="dark:fill-slate-50 fill-slate-900"
        />
      </g>
      <mask
        id="mask1"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="85"
        height="92"
      >
        <rect width="85" height="92" className="dark:fill-slate-100 fill-slate-400" />
      </mask>
      <g mask="url(#mask1)">
        <path
          d="M42.5 0.686859L85 22.3496L42.5 44.0124L0 22.3496L42.5 0.686859Z"
          className="dark:fill-slate-50 fill-slate-900"
        />
        <path
          d="M0 21.8213L42.5 44.0124L0 66.2036L-42.5 44.0124L0 21.8213Z"
          className="fill-slate-600 dark:fill-slate-50"
        />
      </g>
    </svg>
  );
};

export default Logo;
