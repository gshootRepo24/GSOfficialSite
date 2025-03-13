import Topbar from './Topbar'
import Navrbar from './Navrbar'
import AutoSlider from './slider'
import MainContent from './MainContent/MainContent'

export default function RootLayout() {
  return (
   <>
    <Topbar/>
    <Navrbar/>
    <AutoSlider/>
    <MainContent/>
   </>
  )
}
