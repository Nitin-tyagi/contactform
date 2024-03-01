import React from 'react'
import styles from "./ContactHeader.module.css"

 const ContactHeader = () => {
  return (
   <>
   <div className={styles.container}>
   <h1 className='contactSection'>Contact Us</h1>
   <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
    Saepe ex suscipit eos debitis nulla neque recusandae, 
    quaerat obcaecati numquam illum delectus consequuntur ducimus, odio perspiciatis autem 
    cupiditate fugit consectetur magni?</p>
    </div>
   </>
  )
}

export default ContactHeader;