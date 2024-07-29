import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { List } from './List/List';
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/operations';





export const App =() => {
  const dispatch=useDispatch();

  
  useEffect(()=>{
    dispatch(fetchContacts())
  }, [dispatch]);

  return (
    <div>
      <Toaster/>
      <h1>Phonebook</h1>
      <Form />

      <h2>Contacts</h2>
      <Filter/>
      <List/>
    </div>
  )

}