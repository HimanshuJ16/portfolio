import * as React from "react"
const PinterestIcon = ({className, ...rest}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    viewBox="0 0 48 48"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <circle cx={24} cy={24} r={20} fill="#E60023" />
    <path
      fill="#FFF"
      d="M24.444 11.416c-8.632 0-13.215 5.795-13.215 12.103 0 2.934 1.561 6.586 4.06 7.749.378.176.581.1.668-.267.067-.279.404-1.637.555-2.269.049-.201.025-.374-.138-.573-.827-1.003-1.489-2.846-1.489-4.564 0-4.412 3.34-8.68 9.03-8.68 4.913 0 8.353 3.348 8.353 8.137 0 5.41-2.732 9.158-6.286 9.158-1.964 0-3.433-1.624-2.962-3.615.565-2.377 1.657-4.942 1.657-6.659 0-1.535-.823-2.817-2.53-2.817-2.007 0-3.618 2.076-3.618 4.857 0 1.77.598 2.969.598 2.969s-1.982 8.381-2.345 9.941c-.402 1.722-.246 4.142-.072 5.723.451.177.903.354 1.369.499.817-1.328 2.035-3.506 2.486-5.243.244-.936 1.247-4.754 1.247-4.754.652 1.244 2.556 2.297 4.583 2.297 6.032 0 10.379-5.547 10.379-12.44 0-6.609-5.392-11.552-12.33-11.552z"
    />
  </svg>
)
export default PinterestIcon;
