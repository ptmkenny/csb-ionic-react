import React, { useCallback } from 'react';
import { createGesture, Gesture, RefresherEventDetail } from '@ionic/core';
import {
  IonContent,
  IonHeader,
  IonPage, IonRefresher, IonRefresherContent, IonTitle,
  IonToolbar,
  useIonViewDidEnter,
  useIonViewWillEnter,
} from '@ionic/react';

const GesturePage: React.VFC = () => {
  const doRefresh = useCallback((event: CustomEvent<RefresherEventDetail>) => {
    console.log('did refresh');
    setTimeout(() => {
      event.detail.complete();
    }, 2000);
  }, []);

  console.log('gesturePage rendered');

  useIonViewDidEnter(() => {
    console.log('ionViewDidEnter event fired');
  });

  useIonViewWillEnter(() => {
    console.log('ionViewWillEnter fired');
    // TODO: If a user swipes up on or below the <details> element,
    // automatically open up the details element.
    const detailsSelector = document.querySelector('details#my-details') as HTMLDetailsElement;
    const contentSelector = document.querySelector('ion-content') as HTMLElement;

    if (detailsSelector) {
      const onEnd = () => {
        console.log('onEnd triggered');
        // this.pointerUp = false;
        // this.didStart = false;
      };

      const gesture: Gesture = createGesture({
        el: contentSelector,
        gestureName: 'pull-up',
        gesturePriority: 50,
        direction: 'y',
        threshold: 10,
        onEnd: () => {
          onEnd();
        },
      });
      gesture.enable(true);
    }
  });

  return (
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
  );
};

export default GesturePage;
