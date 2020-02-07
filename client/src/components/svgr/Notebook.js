import React from "react"

function SvgNotebook(props) {
  return (
    <svg width={48} height={48} viewBox="0 0 48 48" {...props}>
      <path
        fill="#455A64"
        d="M40 31c0 .553-.447 2-1 2H9c-.552 0-1-1.447-1-2V10a1 1 0 011-1h30a1 1 0 011 1v21z"
      />
      <path fill="#BBDEFB" d="M10 11h28v18H10z" />
      <g fill="#CFD8DC">
        <path d="M3 37h42v2H3zM40 31H8l-5 6h42z" />
      </g>
      <path fill="#546E7A" d="M10 32h28l2 3H8z" />
      <path fill="#90A4AE" d="M28 35h-8l-1 2h10z" />
    </svg>
  )
}

export default SvgNotebook