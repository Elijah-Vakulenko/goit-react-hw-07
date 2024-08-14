import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectLoading } from './redux/contactsSlice';
import { useEffect } from 'react';
import { fetchContacts } from './redux/contactsOps';
import { GiCandlestickPhone } from "react-icons/gi";
import { DNA } from 'react-loader-spinner';
import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import s from './App.module.css';


const App = () => {

  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);



  return (
     <div className={s.wrapper}>
      <div className={s.logo}>
        <GiCandlestickPhone className={s.icon} />
        <h1 className={s.title}>Phonebook</h1>
      </div>
      <ContactForm />
      <SearchBox />
      {loading && (
        <div className={s.loaderAdjustment}>
  <DNA
  visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
  />
        </div>
      )}
      <ContactList />
    </div>
  )
}

export default App