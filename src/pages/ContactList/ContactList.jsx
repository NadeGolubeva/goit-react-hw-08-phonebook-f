import {
  Item,
  List,
  UserIconList,
  PhoneiconList,
  DivName,
  Title,
  Container,
} from './ContactList.styled'; 
import { LoadingOutlined } from '@ant-design/icons';

import { useDispatch, useSelector } from 'react-redux';

import {
  deleteContact,
  fetchContacts,
} from 'Redux/Contacts/operations'; 

import {
  useEffect,
} from 'react';
import { Filter } from 'components/Filter/Filter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Button, Popconfirm } from 'antd'; 
import {
  DeleteOutlined,
} from '@ant-design/icons'; 

export default function Contactlist() {

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchContacts()); 
  }, [dispatch]);

  const { isLoading } = useSelector(state => state.contacts);
  const contacts = useSelector(state => state.contacts.items);
  const filterData = useSelector(state => state.filter).toLowerCase(); 

  const visibleContacts = contacts.filter(subscriber =>
    subscriber.name.toLowerCase().includes(filterData)
  );

  return (
    <section>
      <Container>
        <div>
          {' '}
          {contacts.length < 1 ? (
            <Title>Add your contacts</Title>
          ) : (
            <Filter />
          )}
          <ContactForm />
          {isLoading &&<LoadingOutlined  style={{ fontSize: '22px', color: '#2ca04f' }} spin />}
        </div>
        <List>
          {visibleContacts.map(({ id, name, number }) => (
            <Item key={id}>
              <DivName>
                <UserIconList />
                {name}:
              </DivName>
              <DivName>

              <PhoneiconList /> {number}
              </DivName>
              
              <Popconfirm
                title="Approve to delete this contact?"
                okText="Yes"
                cancelText="No"
                color='#e8eec5'
                onConfirm={() => dispatch(deleteContact(id))}
              >
                <Button title="delete contact" type="primary" style={{backgroundColor: '#2ca04f'}}>
                  <DeleteOutlined /> Delete
                </Button>
              </Popconfirm>
            </Item>
          ))}
        </List>
      </Container>
    </section>
  );
}


