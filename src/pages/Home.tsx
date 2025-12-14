import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText, TextPlugin } from 'gsap/all'

const Home = () => {
  // const chars = 'HELLO GSAP'.split('')

  gsap.registerPlugin(ScrollTrigger, TextPlugin, SplitText)
  useGSAP(() => {
    const split = SplitText.create('h1', {
      type: 'chars',
    })
    gsap.set(split.chars, {
      opacity: 0,
      ease: 'none',
    })

    const tl = gsap.timeline({})
    tl.to(split.chars, {
      opacity: 1,
      ease: 'none',
      stagger: 0.05,
    })
    const tl2 = gsap.timeline({
      repeat: -1,
    })
    tl2.to(
      split.chars,
      {
        color: (i) => `hsl(${i * 12}, 90%, 65%)`,
        stagger: 0.05,
        ease: 'power2.out',
      },
      '>' // 🔥 바로 이전 애니메이션 끝난 다음
    )
    tl2.to(
      split.chars,
      {
        color: '#fff',
        stagger: 0.05,
        ease: 'power2.out',
      },
      '>' // 🔥 바로 이전 애니메이션 끝난 다음
    )
  })
  return (
    <>
      <section className='section-01 w-screen h-screen bg-black text-white flex justify-center items-center'>
        <h1 className='font-bold text-white text-[7vw]'>
          The Beauty of Human Light
          {/* {chars.map((c, index) => (
            <span>{c}</span>
          ))} */}
        </h1>
      </section>
    </>
  )
}

export default Home
