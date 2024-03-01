import React from 'react'
import styles from "./Button.module.css";
import { MdMessage } from "react-icons/md";
const Button = ({isOutline,text,icon,...rest}) => {
  return (
    <button {...rest} className={isOutline? styles.OutlineBtn:styles.PrimaryBtn}> {icon}{text}</button>
  )
}

export default Button