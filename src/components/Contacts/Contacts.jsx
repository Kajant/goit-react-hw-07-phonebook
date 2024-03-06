import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from '../../redux/contactsSlice';
import { selectVisibleContacts } from '../../redux/Selectors';
import css from './Contacts.module.css';


const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);
  const onDelete = contactId => {
    dispatch(deleteContacts(contactId));
  };
  return (
    <>
      <ul className={css.contactList}>
        {contacts.map(({ id, name, number }) => (
          <li className={css.item} key={id}>
            <span>
                    {name}: {number}                    
            </span>
            <button className={css.btn} onClick={() => onDelete(id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>)
}


export default Contacts;