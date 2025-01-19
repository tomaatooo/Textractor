import { collection, getDocs, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../components/firebase'
import { useClerk } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'

const Dashboard = () => {

  const { user } = useClerk()

  const [val, setVal] = useState([])
  const [loading,setLoading]=useState(true)

  
  useEffect(() => {
    const getData = async () => {
      try {
        const q = query(
          collection(db, "User-data"),
          where("email", "==", user.emailAddresses[0].emailAddress)
        );

        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setVal([...val,data])
        setLoading(false)
        console.log("Filtered Documents:", data);
        return data;
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };

    getData();
  },[])

  console.log(val)
  return (
    <div>
      <h1>Welcome back, {user.firstName}</h1>
      <h4>Your past works</h4>
      <div style={{display:'flex',margin:"0px",flexWrap:'wrap'}}>

      <Link to='/dpcreader'>
      <div style={{background:'white',margin:'10px',height:'200px',width:'150px',alignContent:'center',textAlign:'center',fontSize:'36px',opacity:'0.4'}}>+</div></Link>
      {
        !loading&&
        val[0].map((value, index) => (
          <div style={{background:'white',margin:'10px',height:'200px',width:'150px'}} key={index}>
            <p style={{fontSize:'8px',textAlign:'center',alignContent:'center'}}>id:{value.id}</p>
            <p style={{fontSize:'8px',textAlign:'center',alignContent:'center'}}>text:{value.text}</p>

          </div>
        ))
      }
      </div>

    </div>
  )
}

export default Dashboard