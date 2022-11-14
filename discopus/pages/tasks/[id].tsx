import { useRouter } from 'next/router'

const Tasks = () => {
  const router = useRouter()
  const { id } = router.query
  // idk whats wrong thats a good discussion topic
  return (<p>Post: {id}</p>)
}
export default Tasks
