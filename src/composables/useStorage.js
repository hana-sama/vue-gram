import { projectStorage, projectFirestore, timestamp } from '../firebase/config'
import { ref, watchEffect } from 'vue'
const useStorage = (file)=>{
  const error = ref(null)
  const url = ref(null)
  const progress = ref(null)

  watchEffect(()=>{
    //references
    const storageRef = projectStorage.ref('images/' + file.name)
    const collectionRef = projectFirestore.collection('images')
    storageRef.put(file).on('state_change', (snap)=>{
      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
      progress.value = percentage
    },
    (err)=>{
      error.value = err
    },
    async ()=>{
      const dlUrl = await storageRef.getDownloadURL()
      const createdAt = timestamp()
      await collectionRef.add({ url: dlUrl, createdAt })
      url.value = dlUrl
    })
  })

  return { error, url, progress }
}

export default useStorage