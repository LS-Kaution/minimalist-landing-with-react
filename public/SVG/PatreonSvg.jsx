import * as React from "react"

const PatreonSvg = (props) => (
  <svg className="h-6 w-5 fill-[#423636] duration-300 group-hover:fill-[#FA7C34]"
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={512}
    height={512}
    style={{
      enableBackground: "new 0 0 24 24",
    }}
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      d="M15.385.48c-4.765 0-8.641 3.88-8.641 8.65 0 4.755 3.877 8.624 8.641 8.624 4.75 0 8.615-3.869 8.615-8.624C24 4.36 20.136.48 15.385.48zM0 23.52h4.219V.48H0v23.04z"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
      }}
    />
  </svg>
)
export default PatreonSvg