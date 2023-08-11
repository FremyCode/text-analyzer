import Image from 'next/image'
import { TextAnalyzer } from './components/TextAnalyzer'

export default function Home() {
  return (
    <div className='mx-[16dvw] my-[10dvh]'>
      <TextAnalyzer/>
    </div>
  )
}
