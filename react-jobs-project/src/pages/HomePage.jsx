import Hero from "../components/Hero"
import DevelopersEmployers from "../components/DevelopersEmployers"
import BrowseJobs from "../components/BrowseJobs"
import ViewAllJobs from "../components/ViewAllJobs"

const HomePage = () => {
  return (
    <>
        <Hero />
        <DevelopersEmployers />
        <BrowseJobs isHome={true} />
        <ViewAllJobs />
    </>
  )
}

export default HomePage