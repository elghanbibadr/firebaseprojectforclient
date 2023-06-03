import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import {auth} from '../firebaseConfig';


  const App=() => {
const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    // Handle successful Google sign-in
  } catch (error) {
    // Handle error
  }
};

// In your JSX component

return(
<button onClick={signInWithGoogle}>Sign In with Google</button>
)

}

export default App;