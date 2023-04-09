import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from '../Screens/Configuration';
import SideNavBar from '../Components/SideNavBar';
Amplify.configure(awsExports);

export default function Login() {
  return (
    <Authenticator>
      {({ signOut, user }) => {
        console.log(user);
        return(
          <main>
            <SideNavBar signOut={signOut}/>
          </main>
        )
      }}
    </Authenticator>
  );
}