
import './App.css'
import Card from './components/Card'
import Newprops from './components/Newprops'
import  Ourteam  from './components/Ourteam'
import Teamhead from './components/Teamhead'



function App() {


  
  

  return (

    
    <>
    <Teamhead />
      
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-50'>
      <Card
       post="Frontend Developer"
       title="Dipika Bhnadari" 
       img="https://scontent.fbhr4-1.fna.fbcdn.net/v/t39.30808-6/247579239_2012278482270659_8809770848587754965_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeETpmqArihb0W6ZWFk2qXs0AYdYArcZvCQBh1gCtxm8JOQjYWQFLkvwWC68Ta9e2A0Xlmf59cOrISVEiOpHg3h5&_nc_ohc=c689sQt0KeoQ7kNvgFHB5p_&_nc_ht=scontent.fbhr4-1.fna&oh=00_AYAuOpPrnZyBuul4k5gx1ySDO0oqUukc7DgVkd7mxe-Pmw&oe=665DD614"
       description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam reiciendis a vel error"
       facebook="https://www.facebook.com/dipika.bhandari.399?mibextid=ZbWKwL"
       github="https://github.com/Dipika-Bhandari"
        />

       <Card
       post="Frontend Developer" 
       title="Roshika Sharma"
       img="https://scontent.fbhr4-1.fna.fbcdn.net/v/t1.6435-9/128761638_1250168035383067_8242394437516873705_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHTFQN22jQjBwjs6HxWpeOz7yhG3Oi2zSHvKEbc6LbNIWuO-xyspVz3hkGKg-rCTesZnTsB2xweNEGsbqtSMUKz&_nc_ohc=mSMtbbxJKrUQ7kNvgHNAc5l&_nc_ht=scontent.fbhr4-1.fna&oh=00_AYCl8EGGai61LUFjcRS-5OW1HpCHfWJKFq4YjMYbkD7KUw&oe=667F5B54"
       description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam reiciendis a vel error"
       facebook="https://www.facebook.com/roshika.sharma.3557?mibextid=ZbWKwL"
       github="https://github.com/Roshika535"
       
       />

      <Card
       post="Frontend Developer" 
       title="Aditya Neupane"
       img="https://scontent.fbhr4-1.fna.fbcdn.net/v/t31.18172-8/18839861_683333078543032_4325065166629408378_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0VEpQBe_cqoQ7kNvgHkfLvE&_nc_ht=scontent.fbhr4-1.fna&oh=00_AYCPBIPPfopaqk7iQDO055CLNwMmDUaXCZX3vc73BVichQ&oe=667F74CD"
       description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam reiciendis a vel error"
       facebook="https://www.facebook.com/profile.php?id=100005990386360&mibextid=ZbWKwL"
       github="https://github.com/AdityaNeupane"
       
       />
      </div>

      <Newprops  
      title="Dipika"
      description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam reiciendis a vel error"
      age={23}
      marriagestatus={false}

       />

       <Ourteam/>


    </>
  )
}

export default App
