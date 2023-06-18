import {
  Title,
  Wrap,
  TitleH2,
  HomeLink,
  Section,
  HomeEdit,

} from './Home.styled'; 

import { useSelector } from 'react-redux';

export default function Home() {
  const { isLoaggedIn } = useSelector(state => state.auth); 

  return (
    <Section>
      <Title>PhoneBook</Title>

      <Wrap>
        {' '}
        <HomeEdit />
      
      </Wrap>
      {!isLoaggedIn ? (
        <TitleH2>
          Please
          <HomeLink to="/register">Register</HomeLink>
          or
          <HomeLink to="/login">Log in</HomeLink>
          to be able to use your PhoneBook
        </TitleH2>
      ) : (
        <TitleH2>
          Go to the list of your
          <HomeLink to="/contacts">Contacts</HomeLink>
      
        </TitleH2>
      )}
    </Section>
  );
}

 
