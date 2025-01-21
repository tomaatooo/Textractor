import { collection, deleteDoc, doc, getDocs, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../components/firebase'
import { useClerk } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'


const Dashboard = () => {

  const { user } = useClerk()

  const [val, setVal] = useState([])
  const [loading,setLoading]=useState(true)


const handleDelete = async (val) => {
  
  try {
    // Ensure val.id is available
        
    // Delete the document
    
    await deleteDoc(doc(db, "User-data", val));
    
    location.reload();
    
  } catch (error) {
    console.error("Error deleting document: ", error);
  }
};

  
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

      <Link to='/docreader'>
  <div
    style={{
      background: 'white',
      margin: '10px',
      height: '240px',
      width: '190px',
      display: 'flex', 
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontSize: '36px',
      opacity: '0.8', 
      color: 'grey', 
      border: '1px solid #ccc', 
    }}
  >
    +
  </div>
</Link>

      {
        !loading&&
        val[0].map((value, index) => (
          <div style={{textAlign:'center'}}>
          <div style={{background:'white',margin:'10px',height:'240px',width:'190px'}} key={index}>
            <p style={{fontSize:'8px',textAlign:'center',alignContent:'center'}}>id:{value.id}</p>
            <p style={{fontSize:'8px',textAlign:'center',alignContent:'center'}}>text:{value.text}</p>
            <div style={{display:'flex',justifyContent:'center',gap:'2px'}}>
              <Link to={`/view/${value.id}`}><Button>View</Button></Link>
              <Link to={`/edit/${value.id}`}><Button>Edit</Button></Link>
              <Button onClick={()=>handleDelete(value.id)}>Delete</Button>
            </div>

          </div>
          <p style={{color:'white'}}>{value.title}</p>
          </div>
          
        ))
      }
      </div>

    </div>
  )
}

export default Dashboard