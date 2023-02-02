import "./App.css";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

function App() {
  const session = useSession(); // tokens
  const supabase = useSupabaseClient(); // talk to supabase!

  return (
    <div className="App">
      <div style={{ width: "400px", margin: "30px auto" }}>
        {session ? (
          <>
            <h2>Hey there {session.user.email}</h2>
          </>
        ) : (
          <>
            <button onClick={() => googleSignIn()}>Sign In With Google</button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
