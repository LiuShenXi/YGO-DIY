import { useRouter } from 'next/router'
import { useEffect } from 'react'

const HomePage: React.FC = () => {
  const router = useRouter()

  useEffect(() => {
    router.replace('/card-square')
  }, [])

  return null
}

export default HomePage
