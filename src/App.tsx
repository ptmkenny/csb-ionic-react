import React, { useCallback } from 'react';
import {
  IonApp, IonContent, IonHeader, IonPage, IonRefresher,
  IonRefresherContent, IonTitle, IonToolbar,
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
import {
  createGesture, Gesture, GestureDetail, RefresherEventDetail,
} from '@ionic/core';

const App: React.VFC = () => {
  const doRefresh = useCallback((event: CustomEvent<RefresherEventDetail>) => {
    setTimeout(() => {
      event.detail.complete();
    }, 2000);
  }, []);
  // TODO: If a user swipes up on or below the <details> element,
  // automatically open up the details element.
  const detailsSelector = document.querySelector('details#my-details') as HTMLDetailsElement;
  if (detailsSelector) {
    const onStart = () => {
      console.log('onStart triggered');
      // this.pointerUp = true;
      // if (!this.didRefresh) {
      //   translateElement(this.elementToTransform, '0px');
      // }
    };
    const onMove = (detail: GestureDetail) => {
      console.log('onMove triggered', detail);
      // Toggle the details open state.
      detailsSelector.open = !detailsSelector.open;
      // this.lastVelocityY = detail.velocityY;
    };
    const onEnd = () => {
      console.log('onEnd triggered');
      // this.pointerUp = false;
      // this.didStart = false;
    };

    const gesture: Gesture = createGesture({
      el: detailsSelector,
      gestureName: 'pull-up',
      gesturePriority: 31,
      direction: 'y',
      threshold: 5,
      onStart: () => {
        onStart();
      },
      onMove: (detail) => {
        onMove(detail);
      },
      onEnd: () => {
        onEnd();
      },
    });
  }
  return (
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
          <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
            <IonRefresherContent />
          </IonRefresher>
          <p>This is some text.</p>
          <details id="my-details">
            <summary id="my-summary">
              Show the secret
            </summary>
            <p>Here is the secret.</p>
          </details>
        </IonContent>
      </IonPage>
    </IonApp>
  );
};

export default App;
