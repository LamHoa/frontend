import { lazy, useEffect, useState, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllPage from './component/AllPage/AllPage';
import { loggedin } from './component/function/loggedin';
import RecipePage from './component/RecipePage/RecipePage';
import { SearchComponent } from './component/Search/SearchComponent';
import SelfPage from './component/SelfPage/SelfPage';
import "./style.sass"
const LoginPage = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./component/AccountPage/LoginPage")), 2000);
  });
});

const SignupPage = lazy(() => import("./component/AccountPage/SignupPage"))

function App() {
  const [search_query, setsearch_query]= useState(()=> "")
  const [user, setuser]= useState(()=> {})
  const [like, setlike]= useState(()=> false)
  const uploadUser= (avatar)=> {
    setuser(prev=> ({...prev, avatar_user: avatar}))
  }
  useEffect(()=> {
    loggedin(setuser)
  }, [like])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Suspense fallback={<div>Loading...</div>}><LoginPage /></Suspense>}></Route>
        <Route path="/signup" element={<Suspense fallback={<div>Loading...</div>}><SignupPage /></Suspense>} ></Route>
        <Route path="/*" element={<AllPage {...user} search_query={search_query} setsearch_query={setsearch_query} />}></Route>
        <Route path="/user/:id/*" element={<SelfPage {...user} setuser={uploadUser} />}></Route>
        <Route path="/search" element={<SearchComponent search_query={search_query} setsearch_query={setsearch_query} />}></Route>
        <Route path="recipe/page/:id" element={<RecipePage {...user} setlike={setlike} like={like} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
