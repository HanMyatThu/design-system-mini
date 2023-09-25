import '../../tailwind.css';
interface IconsProps {
  width?: string,
  height?: string,
  fill?: string,
  viewBox?: string,
}

interface Icon extends IconsProps {
  type: string
}

const GlobalIcon: React.FC<IconsProps> = ({ 
   width = '24px',
   height = '24px',
   fill = 'none',
   viewBox = "0 0 24 24"
}: IconsProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={viewBox} fill={fill}>
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.99998 3H8.99998C7.04998 8.84 7.04998 15.16 8.99998 21H7.99998" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15 3C16.95 8.84 16.95 15.16 15 21" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 16V15C8.84 16.95 15.16 16.95 21 15V16" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 9.0001C8.84 7.0501 15.16 7.0501 21 9.0001" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

const HeartIcon: React.FC<IconsProps> = ({
  width = '24px',
  height = '24px',
  fill = 'none',
  viewBox = "0 0 24 24" 
}: IconsProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={viewBox} fill={fill}>
      <path d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

const ScheduleIcon: React.FC<IconsProps> = ({
  width = '24px',
  height = '24px',
  fill = '#000000',
  viewBox = "0 0 24 24" 
}: IconsProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={viewBox} fill={fill}>
      <path fillOpacity=".9" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
    </svg>
  )
}

const ToolIcon: React.FC<IconsProps> = ({
  width = '24px',
  height = '24px',
  fill = '#000000',
  viewBox = "0 0 32 32" 
}: IconsProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={viewBox}>
      <g id="Page-1" stroke="none" strokeWidth="1" fill={fill} fillRule="evenodd" >
        <g id="Icon-Set" transform="translate(-569.000000, -308.000000)" fill={fill}>
          <path d="M594.884,322.281 C592.585,324.575 589.129,324.958 586.406,323.494 L574.556,335.322 C573.754,336.122 572.454,336.122 571.651,335.322 C570.85,334.521 570.85,333.225 571.651,332.424 L583.503,320.596 C582.038,317.88 582.422,314.433 584.72,312.139 C586.098,310.764 587.896,310.11 589.701,310.088 C587.81,312.096 587.835,315.248 589.802,317.211 C591.768,319.173 594.926,319.198 596.938,317.311 C596.916,319.112 596.262,320.906 594.884,322.281 L594.884,322.281 Z M598.159,313.37 C597.653,313.938 596.813,314.661 595.609,315.762 C594.334,317.034 592.529,317.034 591.254,315.762 C589.978,314.488 589.978,312.688 591.254,311.415 C592.429,310.242 593.692,308.853 593.672,308.847 C590.257,307.274 586.082,307.882 583.268,310.69 C580.703,313.249 579.972,316.935 581.051,320.146 L570.2,330.976 C568.596,332.576 568.596,335.171 570.2,336.771 C571.804,338.371 574.404,338.371 576.008,336.771 L586.858,325.942 C590.078,327.021 593.771,326.289 596.336,323.73 C599.146,320.925 599.73,316.775 598.159,313.37 L598.159,313.37 Z" id="tools">
          </path>
          </g>
      </g>
    </svg>
  )
}

const MadIcon: React.FC<IconsProps> = ({
  width = '24px',
  height = '24px',
  fill = '#000000',
  viewBox = "0 0 24 24" 
}: IconsProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={viewBox}>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM9.24742 15.3186C9.55525 14.8759 10.3899 14 11.9999 14C13.61 14 14.4446 14.8759 14.7525 15.3186C14.8817 15.5044 14.953 15.6903 14.9966 15.8337C15.0417 15.9823 15.1342 16.3056 15.1606 16.6103C15.1709 16.7292 15.1925 17.0315 15.0619 17.3325C14.9846 17.5107 14.8268 17.7485 14.5313 17.8934C14.2366 18.0378 13.9507 18.0185 13.7574 17.9701C12.7095 17.7082 12.3482 17.625 11.9999 17.625C11.6516 17.625 11.2904 17.7082 10.2425 17.9701C10.0491 18.0185 9.76324 18.0378 9.46861 17.8934C9.1731 17.7485 9.01528 17.5107 8.93798 17.3325C8.80741 17.0315 8.82901 16.7292 8.83931 16.6103C8.86569 16.3056 8.95821 15.9823 9.00331 15.8337C9.04683 15.6903 9.11818 15.5044 9.24742 15.3186ZM9 13.5C9.82843 13.5 10.5 12.8284 10.5 12C10.5 11.5509 10.3026 11.1479 9.98991 10.873L10.1286 10.9285C10.6414 11.1336 11.2234 10.8842 11.4285 10.3714C11.6336 9.85861 11.3842 9.27664 10.8714 9.07152L8.37139 8.07152C7.85861 7.86641 7.27664 8.11583 7.07152 8.62861C6.86641 9.14139 7.11583 9.72336 7.62861 9.92848L9.0604 10.5012C9.04037 10.5004 9.02023 10.5 9 10.5C8.17157 10.5 7.5 11.1716 7.5 12C7.5 12.8284 8.17157 13.5 9 13.5ZM16.5 12C16.5 12.8284 15.8284 13.5 15 13.5C14.1716 13.5 13.5 12.8284 13.5 12C13.5 11.5509 13.6974 11.1479 14.0101 10.873L13.8714 10.9285C13.3586 11.1336 12.7766 10.8842 12.5715 10.3714C12.3664 9.85861 12.6158 9.27664 13.1286 9.07152L15.6286 8.07152C16.1414 7.86641 16.7234 8.11583 16.9285 8.62861C17.1336 9.14139 16.8842 9.72336 16.3714 9.92848L14.9396 10.5012C14.9596 10.5004 14.9798 10.5 15 10.5C15.8284 10.5 16.5 11.1716 16.5 12Z" fill={fill}/>
    </svg>
  )
}

const CloseIcon: React.FC<IconsProps> = ({
  width = '10px',
  height = '10px',
  fill = '#000000',
  viewBox = "0 0 14 14" 
}: IconsProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={viewBox} fill={fill}>
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
    </svg>
  )
}

const InfoIcon: React.FC<IconsProps> = ({
  width = '32px',
  height = '32px',
  fill = '#000000',
  viewBox = "0 0 24 24" 
}: IconsProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={viewBox} fill={fill}>
      <circle cx="12" cy="12" r="10" stroke={fill} strokeWidth="1.5"/>
      <path d="M12 17V11" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="1" cy="1" r="1" transform="matrix(1 0 0 -1 11 9)" fill="white"/>
    </svg>
  )
}

const BulbIcon: React.FC<IconsProps> = ({
  width = '24px',
  height = '24px',
  fill = '#000000',
  viewBox = "0 0 24 24" 
}: IconsProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={viewBox} fill={fill} id="bulb-icon">
      <g id="information">
        <g>
          <path d="M12,24c-2.2,0-4-1.8-4-4v-2.6c0-1.4-0.6-2.7-1.5-3.6C4.9,12.3,4,10.2,4,8s0.9-4.2,2.4-5.7C8,0.8,10,0,12.2,0    c4.2,0.1,7.7,3.6,7.8,7.7c0.1,2.3-0.8,4.4-2.4,5.9c-1,1-1.6,2.3-1.6,3.7V20C16,22.2,14.2,24,12,24z M10,19v1c0,1.1,0.9,2,2,2    s2-0.9,2-2v-1H10z M10,17h4c0.1-1.8,0.9-3.4,2.2-4.7c1.2-1.2,1.8-2.8,1.8-4.5c-0.1-3.1-2.7-5.7-5.9-5.8c-1.6,0-3.2,0.6-4.3,1.7    C6.6,4.8,6,6.4,6,8c0,1.7,0.7,3.2,1.8,4.3C9.1,13.6,9.9,15.2,10,17z"/>
        </g>
      </g>
    </svg>
  )
}

const CrossCicle: React.FC<IconsProps> = ({
  width = '20px',
  height = '20px',
  fill = '#000000',
  viewBox = "0 0 32 32" 
}: IconsProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={viewBox} fill={fill} id="cross-circle-icon">
      <title>cross-round</title>
      <path d="M0 16q0 3.264 1.28 6.208t3.392 5.12 5.12 3.424 6.208 1.248 6.208-1.248 5.12-3.424 3.392-5.12 1.28-6.208-1.28-6.208-3.392-5.12-5.088-3.392-6.24-1.28q-3.264 0-6.208 1.28t-5.12 3.392-3.392 5.12-1.28 6.208zM4 16q0-3.264 1.6-6.016t4.384-4.352 6.016-1.632 6.016 1.632 4.384 4.352 1.6 6.016-1.6 6.048-4.384 4.352-6.016 1.6-6.016-1.6-4.384-4.352-1.6-6.048zM9.76 20.256q0 0.832 0.576 1.408t1.44 0.608 1.408-0.608l2.816-2.816 2.816 2.816q0.576 0.608 1.408 0.608t1.44-0.608 0.576-1.408-0.576-1.408l-2.848-2.848 2.848-2.816q0.576-0.576 0.576-1.408t-0.576-1.408-1.44-0.608-1.408 0.608l-2.816 2.816-2.816-2.816q-0.576-0.608-1.408-0.608t-1.44 0.608-0.576 1.408 0.576 1.408l2.848 2.816-2.848 2.848q-0.576 0.576-0.576 1.408z"/>
    </svg>
  )
}

const CheckMark: React.FC<IconsProps> = ({
  width = '20px',
  height = '20px',
  fill = '#000000',
  viewBox = "0 0 96 96" 
}: IconsProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={viewBox} fill={fill} id="cross-check-icon">
      <g>
      <path d="M58.3945,32.1563,42.9961,50.625l-5.3906-6.4629a5.995,5.995,0,1,0-9.211,7.6758l9.9961,12a5.9914,5.9914,0,0,0,9.211.0059l20.0039-24a5.9988,5.9988,0,1,0-9.211-7.6875Z"/>
      <path d="M48,0A48,48,0,1,0,96,48,48.0512,48.0512,0,0,0,48,0Zm0,84A36,36,0,1,1,84,48,36.0393,36.0393,0,0,1,48,84Z"/>
      </g>
    </svg>

  )
}



const Icon: React.FC<Icon> = ({
  type,
  ...props
}) => {
  switch (type) {
    case 'icon-global':
      return <GlobalIcon {...props} />
    case 'icon-heart':
      return <HeartIcon {...props}/>
    case 'icon-schedule':
      return <ScheduleIcon {...props}/>
    case 'icon-tool':
      return <ToolIcon {...props}/>
    case 'icon-mad':
      return <MadIcon {...props}/>
    case 'icon-close':
      return <CloseIcon {...props}/>
    case 'icon-info':
      return <InfoIcon {...props}/>
    case 'icon-bulb':
      return <BulbIcon {...props}/>
    case 'icon-cross-circle':
      return <CrossCicle {...props}/>
    case 'icon-check':
      return <CheckMark {...props}/>
    default:
      return <CrossCicle {...props}/>
 }
}

export default Icon