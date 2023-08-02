import React from 'react'

type Props = {
    iconName: string;
    iconClass: string;
}

function Icon({iconName, iconClass}: Props) {
  return (
    <span className={`material-symbols-outlined ${iconClass}`}>{iconName}</span>
  )
}

export default Icon;