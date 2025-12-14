import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText, TextPlugin } from 'gsap/all'

const Home = () => {
  // const chars = 'HELLO GSAP'.split('')

  gsap.registerPlugin(ScrollTrigger, TextPlugin, SplitText)
  useGSAP(() => {
    const split = SplitText.create('.title-ingwangme', {
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

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section-01',
        pin: true,
        start: 'top top',
        end: '+=4000',
        scrub: true,
        // markers: true,
        id: 'section-01',
        onLeave: () => {
          tl4.restart()
          console.log('leave')
        },
        onEnter: () => {
          console.log('enter')
        },
        onLeaveBack: () => {
          console.log('leave back')
        },
        onEnterBack: () => {
          tl4.pause()
          gsap.to('.credit', {
            opacity: 0,
            duration: 1,
          })
          gsap.to('.credit', {
            text: '',
            delay: 1,
            duration: 0,
          })
        },
      },
    })
    tl3
      .to('.circle', {
        scale: 15,
        ease: 'none',
        stagger: 0.1,
      })
      .to('.title-back-2', {
        width: '100vw',
        ease: 'none',
        opacity: 1,
        duration: 0,
      })
      .to('.title-back-2', {
        height: '50vh',
        ease: 'none',
        duration: 1,
      })
    const tl4 = gsap.timeline({
      paused: true,
    })
    tl4.set('.credit', {
      backgroundImage: 'linear-gradient(90deg, #26cce9, #34d399)',
      backgroundClip: 'text',
      color: 'transparent',
    })
    tl4.to('.credit', {
      opacity: 1,
      text: 'Concept HONG <br/> Design MOLDU <br/> Development RYU',
      duration: 6,
    })
    tl4.fromTo(
      '.credit',
      {
        backgroundPosition: '0px 50%',
      },
      {
        backgroundPosition: '846px 50%',
        duration: 5,
        repeat: -1,
        ease: 'power2.out',
      }
    )
  })
  return (
    <>
      <section className='section-01 w-screen h-screen bg-black text-white flex justify-center items-center overflow-hidden'>
        <h1 className='title title-ingwangme font-bold text-white text-[7vw]/[1] absolute top-[50%] left-[50%] translate-[-50%] w-full text-center'>
          The Beauty of Human Light
        </h1>
        <div className='circle circle-1 absolute top-[20%] left-[20%] bg-yellow-50 w-[10vw] h-[10vw] rounded-full scale-0'></div>
        <div className='circle circle-2 absolute top-[80%] left-[80%] bg-amber-300 w-[10vw] h-[10vw] rounded-full scale-0'></div>
        <div className='circle circle-3 absolute top-[50%] left-[56%] translate-[-50%] bg-emerald-200 w-[10vw] h-[10vw] rounded-full scale-0'></div>
        <div className='bg-black title-back-2 absolute top-[50%] left-[50%] translate-[-50%] opacity-0 flex justify-center items-center'>
          <p className='credit text-center text-[5vw]/[1.1] font-bold bg-clip-text'></p>
        </div>

        {/* <div className='image-wrapper w-[500px] h-[500px] overflow-hidden scale-0 rounded-full absolute left-[82%] top-[10%]'>
          <img src='./src/assets/image.png' width='500px' height='500px' />
        </div> */}

        {/* <h1 className='title title-ingwangme-2 font-bold text-white text-[7vw]/[1] absolute top-[50%] left-[50%] translate-[-50%] w-full text-center opacity-0'>
          
        </h1> */}
      </section>
    </>
  )
}

export default Home
