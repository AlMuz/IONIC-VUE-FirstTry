<template>
  <base-layout page-title="All memories">
    <ion-list>
      <ion-item
        :router-link="`/memories/${id}`"
        v-for="memory in memories"
        :key="memory.id"
      >
        <ion-thumbnail slot="start">
          <ion-img :src="memory.image" :alt="memory.title"></ion-img>
        </ion-thumbnail>
        <ion-label>
          {{ memory.title }}
        </ion-label>
      </ion-item>
    </ion-list>
  </base-layout>
</template>

<script>
import { IonList, IonItem, IonImg, IonThumbnail, IonLabel } from '@ionic/vue'
export default {
  components: {
    IonList,
    IonItem,
    IonImg,
    IonThumbnail,
    IonLabel
  },
  data() {
    return {
      memories: [
        {
          id: '1',
          title: 'A trip to the Ventspils',
          description: 'Nice trip',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Ventspilis._Livonijos_ordino_pilis%2C_1290_m._2006-09-22.jpg/1200px-Ventspilis._Livonijos_ordino_pilis%2C_1290_m._2006-09-22.jpg'
        },
        {
          id: '2',
          title: 'Chiil near the lake',
          description: 'Cold water',
          image:
            'https://i.hurimg.com/i/hdn/75/0x0/5dcd630a0f25441794d60a1c.jpg'
        },
        {
          id: '3',
          title: 'Urban tourism',
          description: 'Cool new places',
          image:
            'https://www.holidify.com/images/cmsuploads/compressed/Hand-Luggage-Only-2-1_20181228121957.jpg'
        }
      ]
    }
  }
}
</script>

<style></style>
