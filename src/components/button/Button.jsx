import React from 'react';
import classNames from 'classnames';
import "./Button.css";

export const Button = (
    {
        onClick,
        type,
        children,
        size="s"
    }
) => {
  const btnClass = classNames({
       'btn':true,
       'btn--secondary': type === 'secondary',
       'btn--primary': type === 'primary',
       'btn--small': type === 'small',
       'btn--medium':type === 'medium'
  })
  return (
    <button className={btnClass} onClick={onClick}>
        {children}
    </button>
  )
}
