import EnterpriseNavbar from './components/EnterpriseNavbar'
import HeroSection from './components/HeroSection'
import VisionGovernanceSection from './components/VisionGovernanceSection'
import OperatingModelSection from './components/OperatingModelSection'
import BusinessUnitsSection from './components/BusinessUnitsSection'
import GlobalFootprintMap from './components/GlobalFootprintMap'
import ProjectsSection from './components/ProjectsSection'
import InvestorRelationsSection from './components/InvestorRelationsSection'
import SustainabilitySection from './components/SustainabilitySection'
import InnovationSection from './components/InnovationSection'
import NewsroomSection from './components/NewsroomSection'
import LeadershipFooter from './components/LeadershipFooter'
import ReportPreviewModal from './components/ui/ReportPreviewModal'
import ContactModal from './components/ui/ContactModal'
import BackToTop from './components/ui/BackToTop'
import { UIProvider } from './context/UIContext'
import { MarketProvider } from './context/MarketContext'
import { useSmoothScroll } from './hooks/useSmoothScroll'

export default function App() {
  useSmoothScroll()

  return (
    <UIProvider>
      <MarketProvider>
        <div id="top" className="min-h-screen bg-white font-sans text-[#0A1628] antialiased">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[120] focus:bg-[#0A1628] focus:px-4 focus:py-2.5 focus:text-sm focus:font-medium focus:text-white"
          >
            Skip to content
          </a>
          <EnterpriseNavbar />
          <main id="main-content">
            <HeroSection />
            <VisionGovernanceSection />
            <OperatingModelSection />
            <BusinessUnitsSection />
            <GlobalFootprintMap />
            <ProjectsSection />
            <InvestorRelationsSection />
            <SustainabilitySection />
            <InnovationSection />
            <NewsroomSection />
            <LeadershipFooter />
          </main>
          <BackToTop />
        </div>
        <ReportPreviewModal />
        <ContactModal />
      </MarketProvider>
    </UIProvider>
  )
}
