import Footer from "./src/components/Footer"
import Main from "./src/components/Main"
import SideBar from "./src/components/SideBar"
import { useEffect, useState } from "react"


function App() {
  
  const[showModal,setShowModal]=useState(false)
  function handleToggleModal(){
    setShowModal(!showModal)
  }
  useEffect(()=>{
    async function fetchAPIData() {
      const NASA_KEY=import.meta.env.VITE_NASA_API_KEY;
      console.log(NASA_KEY)
      const url='https://api.nasa.gov/planetary/apod'+
      `?api_key=${NASA_KEY}`
      try{
        const res=await fetch(url)
        const data=await res.json()
        console.log('DATA\n',data)
      }
      catch (err){
        console.log(err.message)
      }
    }
    fetchAPIData()
  },[])
  
  return (
    <>
      <Main></Main>
      {showModal &&(
        <SideBar handleToggleModal={handleToggleModal}/>
        )}
      <Footer handleToggleModal ={handleToggleModal}></Footer>
    </>
  )
}

export default App
