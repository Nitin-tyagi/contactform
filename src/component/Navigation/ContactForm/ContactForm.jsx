import React, { useState } from 'react'
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import styles from "./ContactForm.module.css";
import Button from '../../Button/Button';
const ContactForm = () => {
// let name="anshu";
// let email="anshu@123";
// let text="anshu is a good boy";

const [name,setName]=useState("anshu");
const [email,setEmail]=useState("anshu@123");
const [text,setText]=useState("anshu is a good boy");
    const onSubmit=(event)=>{
        event.preventDefault();
        
        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);
        // name=event.target[0].value;
        // email=event.target[1].value;
        // text=event.target[2].value;
        // console.log("name",event.target[0].value);
        // console.log("email",event.target[1].value);
        // console.log("text",event.target[2].value);
    }


  return (
    <>
    <section className={styles.container}>ContactForm</section>
    <div className={styles.topBtn}>
        <Button  text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>}/>
    <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />}/>
    </div>
    <Button isOutline={true} text="VIA CALL" icon={<MdOutlineMail fontSize="24px"/>}/>
    <form onSubmit={onSubmit}>
        <div className={styles.formControl}>
        <label htmlFor='name'>Name</label>
        <input type='text' name='name'/>
        </div>
        <div className={styles.formControl}>
        <label htmlFor='email'>Email</label>
        <input type='email' name='email'/>
        </div>
        <div className={styles.formControl}>
        <label htmlFor='text'>TEXT</label>
        <textarea name='text'/>
        </div><br/>
        <div className={styles.formControl}>
        <Button text="SUBMIT" />
        </div>
        <div>
            {name + " " + email + " " + text}
        </div>
    </form>
    </>
  )
}

export default ContactForm