import Navbar from '../Components/Navbar'
import PhotoContainer from '../Components/PhotoContainer'
import About from '../Components/About'
import Posts from '../Components/Posts'


function ProfilePage({user}) {

  
   

  return (
    <>
       <div className='w-screen '>

      <Navbar/>
      <PhotoContainer user={user}/>
       </div>
       <div className='flex items-center justify-center'>

      <About occupation={user.occupation} site={user.site} />
       </div>
      <Posts/>
    </>
  )
}

export default ProfilePage
