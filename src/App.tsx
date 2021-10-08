import React from 'react';
import {
  IonApp, IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
} from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

const App: React.VFC = () => (
  <IonApp>
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            Home page
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p>This is some text.</p>
      </IonContent>
    </IonPage>
  </IonApp>
);

export default App;
