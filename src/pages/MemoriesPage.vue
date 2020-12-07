<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>All memories</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item>A trip to the Ventspils</ion-item>
        <ion-item>Chiil near the lake</ion-item>
        <ion-item>Urban tourism</ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem
} from '@ionic/vue'
export default {
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem
  }
}
</script>

<style></style>
