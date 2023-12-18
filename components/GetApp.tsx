import Button from "./Button"
import Image from 'next/image'

const GetApp = () => {
  return (
    <section className='flexCenter w-full flex-col pb-[100px]'>
  <div className='get-app relative'>
    <div className='z-20 flex w-full flex-1 flex-col items-start justify-center gap-12 bg-green-90 rounded-3xl p-8 lg:p-12'>
      <h2 className='bold-40 lg:bold-64 xl:max-w-[320px]'>Get for Free Now!</h2>
      <p className='regular-16 text-gray-10'>Available on iOS and Android, download now!</p>
      <div className="flex w-full flex-col gap-3 mt-6 lg:flex-row lg:items-center">
        <Button 
          type='button'
          title='App Store'
          icon='/apple.svg'
          variant='btn_white'
        />
        <div className="lg:ml-4"></div> {/* Adjust the spacing between buttons */}
        <Button 
          type='button'
          title='Play Store'
          icon='/android.svg'
          variant='btn_dark_green_outline'
        />
      </div>
    </div>
    <div className="flex flex-1 items-center justify-end">
      <Image 
        src="/phones.png"
        alt="phones"
        width={550}
        height={870}
      />
    </div>
  </div>
</section>
  )
}

export default GetApp
