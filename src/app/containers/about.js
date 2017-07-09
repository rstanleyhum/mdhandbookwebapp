import React from 'react';

import BasePage from '../components/basepage';


const About = ({user}) => (
  <BasePage user={user}
    pageContent={(
      <div>
        <h1>{user.email}</h1>
        <h2>About</h2>
        <p>
          The MD Handbook Web Site has been developed for MSCHONY residents and other healthcare professionals to support the educational app.
          The site allows for customization of an educational mobile app.
        </p>
        <p>
          The site is maintained by Dr. R. Stanley Hum.
        </p>
        <p>
            Contact:
        </p>
        <address>
            3959 Broadway, CHN 10-24<br />
            New York, NY, 10032<br />
            rsh2117@cumc.columbia.edu<br />
        </address>
      </div>
    )}
  />
);


export default About;
