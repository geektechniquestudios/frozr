import { TransactionTile } from "./tile/TransactionTile"
import { Deposits } from "./Deposits/Deposits"
import { HeadingBlurb } from "./HeadingBlurb"
import { Footer } from "./footer/Footer"
import { FluffTile } from "./FluffTile"
import "../index.scss"

export const MainContent: React.FC = () => {
  return (
    <div className="flex h-full justify-center">
      <div className="flex max-w-[42em] grow flex-col gap-3 px-3 pt-4">
        <HeadingBlurb />
        <TransactionTile />
        <Deposits />
        <FluffTile />
        <Footer />
      </div>
    </div>
  )
}
