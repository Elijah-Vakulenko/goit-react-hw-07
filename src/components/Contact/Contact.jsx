import React from 'react'
import s from './Contact.module.css';
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import { BsTelephone } from "react-icons/bs";
import { IoPersonCircleOutline } from "react-icons/io5";

const Contact = ({name, number, id}) => {

  const dispatch = useDispatch();

  return (
      <div className={s.wrapper}>
          <div className={s.person}>
              <div className={s.item}>
                <IoPersonCircleOutline className={s.icon} />
                <p>{name}</p>
              </div>
              <div className={s.item}>
                <BsTelephone className={s.icon} />
                <p>{number}</p>
              </div>
          </div>
          <button className={s.delBtn} type="button" onClick={() => dispatch(deleteContact(id))}><div className={s.frame}>Delete</div></button>
    </div>
  )
}

export default Contact