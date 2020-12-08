import { createStore } from 'vuex'

const store = createStore({
  state() {
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
  },
  getters: {
    memories(state) {
      return state.memories
    },
    memory(state) {
      return (memoryId) => {
        return state.memories.find((memory) => memory.id === memoryId)
      }
    }
  }
})

export default store
