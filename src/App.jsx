import './App.css'
import Button from './component/Button'

function App() {
 
  const background = "/src/assets/screw.jpg"

  const backgroundCon = {
    backgroundImage: `url(${background})`,
  }


  return (
    <>
     <div>
      <div style={backgroundCon} className='z-10 bg-cover bg-center h-screen flex items-center justify-center'>
        <div>
          <div className='grid text-[#c4b3da] '>
            <h1 className='text-[10px] md:pl-[20px] tracking-wide md:text-[17px] pb-2 md:pb-6 leading-3'>BRITTEN</h1>
            <h1 className='text-[30px] md:pl-[15px]  md:text-[45px]  py-[10px] leading-[5px]'>THE</h1>
          </div>
          
          <div className='flex text-[#c4b3da] space-x-2 '>
            <h1 className='text-[30px] md:text-[150px]  md:pt-[50px] leading-9'>TURN</h1>
            <div className='grid text-[10px]  md:text-[35px]'>
              <h1 className='md:pt-[30px]'>OF</h1>
              <h1  className=''>THE</h1>
            </div> 
            <h1 className='text-[30px] md:text-[150px]   md:pt-[50px] leading-9'>SCREW</h1>
          </div>

          <div className='text-[#c4b3da] text-[4px] md:text-[15px] md:leading-9 flex justify-end'>
            <p>An immersive trailer for Opera North production</p>
          </div>

          <Button />
        </div>

        
        
      </div>
     </div>
    </>
  )
}

export default App
