import { useRouter } from 'next/router'

const Companies = () => {
  const router = useRouter()
  const { id } = router.query
  // idk whats wrong thats a good discussion topic
  return (<p>Post: {id}</p>)
}
export default Companies
