
import './App.css'
import ReuseableForm from './components/ReuseableForm/ReuseableForm'
// import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm';
// import StatefulForm from './components/StatefulForm/StatefulForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'

function App() {
  const handleSignUpSubmit = data =>{
    console.log('sign up data', data);
 }

 const handleUpdateProfile = data =>{
  console.log('update profile', data);
 }
  return (
    <>
      
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReuseableForm formTitle={'Sign Up'} handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign Up</h2>
          <p>Please Sign Up Right Now</p>
        </div>
      </ReuseableForm>
      <ReuseableForm formTitle={'Profile Update'} handleSubmit={handleUpdateProfile} submitBtnText='Update'>
        <div>
          <h2>Update Profile</h2>
          <p>Always keep your profile Updated</p>
        </div>
      </ReuseableForm>
      
    </>
  )
}

export default App
