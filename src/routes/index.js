import FollowingPage from "~/pages/Following/following"
import Home from "~/pages/Home/home"
import Profile from "~/pages/Profile/profile"
import Upload from "~/pages/Upload/upload"
import Search from "~/pages/Search/search"

//Layout
import { HeaderOnly } from "~/components/Layouts"


//Public Router
const publicRoutes = [
    {path:'/', component:Home},
    {path:'/following', component:FollowingPage},
    {path:'/profile', component:Profile},
    {path:'/upload', component:Upload , layout: HeaderOnly},
    {path:'/search', component:Search , layout: null},
]

const privateRoutes = []

export {publicRoutes,privateRoutes}