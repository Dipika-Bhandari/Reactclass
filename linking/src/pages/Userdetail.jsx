
import { useParams } from 'react-router-dom'
const Userdetail = () => {

    const myid = useParams();
    console.log(myid.id);
  return (
   <>
   <h1>this is your id {myid.id}</h1>
   </>


  )
}

export default Userdetail