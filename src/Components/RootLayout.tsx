import Topbar from './Topbar'
import Navrbar from './Navrbar'
import AutoSlider from './slider'
import MainContent from './MainContent/MainContent'
import MainContent2 from './MainContent/MainContent2'
import MainContent3 from './MainContent/MainContent3'

export default function RootLayout() {
  return (
   <>
    <Topbar/>
    <Navrbar/>
    <AutoSlider/>
    <MainContent/>
    <MainContent2/>
    <MainContent3/>
   </>
  )
}
