'use client'
import '@ant-design/v5-patch-for-react-19';
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  // useEffect(()=>{
  //     router.push('/login')
  // },[])

  return (
    <>
     hello world!
    </>
  );
}
