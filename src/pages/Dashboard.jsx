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

  return (
    <div style={{marginTop:'10px'}}>
      <h1 style={{color:'white',fontWeight:'700'}}>Welcome back, <span style={{color:'pink'}}>{user.firstName}</span></h1>
      <h4 style={{color:'white'}}>
      {!loading&&val[0].length==0?'No Works':'Your past works'}
      </h4>
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
      borderRadius:'10px' 
    }}
  >
    +
  </div>
</Link>

      {
        !loading&&
        val[0].map((value, index) => (
          <div key={index} style={{textAlign:'center'}}>
          <div style={{background:'white',margin:'10px',height:'240px',width:'190px',borderRadius:'10px',marginBottom:'0px'}} key={index}>
          
          <div style={{padding:'5px',fontSize:'8px',height:'80%',overflow:'hidden'}} dangerouslySetInnerHTML={{ __html: value.text }}
    />
            <div style={{display:'flex',justifyContent:'center',gap:'2px',margin:'5px'}}>
              <Link to={`/view/${value.id}`}><Button>View</Button></Link>
              <Link to={`/edit/${value.id}`}><Button>Edit</Button></Link>
              <Button style={{backgroundColor:'red'}} onClick={()=>handleDelete(value.id)}>Delete</Button>
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