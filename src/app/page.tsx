import Image from "next/image";

export default function Home() {
  return (<div>
    <div className="w-[1440px] bg-[#252B42] mx-auto   h-[91px] text-white">
   <div className="w-[152px] h-[32px] mx-48 py-8 flex font-abc text-[#FFFFFF] font-bold  text-2xl">
   BrandName
   
   <div className="w-[275p] h-[24]  font-abc text-sm text-white flex-auto">
    <ul className="flex mx-32 space-x-4">
      <li>Home</li>
      <li>Product</li>
      <li>Pricing</li>
      <li>Contact</li>
    </ul> 
    </div> 

    <div className="flex justify-items-end ml-56 ">
        <button className="w-[41px] h-[26] text-sm mx-4 mr-12 -mt-1 text-white">Login</button>
        <button className="h-[52px] w-[110px] bg-[#23A6F0] text-sm text-white  mr-[25px] -mt-4 rounded">JOIN US</button>
    </div>
    


   </div>
    </div>
    
    
    
    
    <div className="w-[1440px] bg-[#252B42] mx-auto  h-[1132px] py-2">
    <div className=" bggreen-400 w-[1064px] mx-auto mt-20 h-[1028px]">

      <div className="bgred-400 w-[699px] h-[496px] mx-48 mt-20 " >
        <div className="bgslate-500 w-[701px] h-[496px] mx-20 mt-20">
          <h1 className="text-base font-abc font-bold relative top-28 left-60 text-[#23A6f0]" >Welcome</h1>
          <div className="w-[542px] h-[160px] font-abc font-bold text-5xl text-center text-white relative top-40">Selling on the internet like a pro</div>
          <div className="w-[460px] h-[60px] font-abc text-center text-lg text-white font-normal relative top-32 left-12">We know how large objects will act, but things on a 
          small scale just do not act that way.</div>
          <div className="flex relative left-32 top-60">
            <button className="h-[52px] w-[193px] bg-[#23A6F0]  text-white rounded-md">Get Quote Now</button>
            <button className="w-[162px] h-[52] border-solid border-2 border-[#23A6f0] mx-4 rounded-md text-[#23A6F0]">Learn More</button>
          </div>
       </div>

      </div>
      <div className="flex mt-36 text-base w-[1046] h-[292px] mx-auto">
        <div className="flex-auto w-[329px] bg-white h-[292px]  ">
          <div className="bg-red-200 w-[70px] h-[76px] mt-8 mx-10 rounded-md">
        </div>
       <h6 className=" mx-10 mt-8 font-abc text-base font-bold">training Courses</h6>
       <h6 className="text-sm"></h6>
       <h6 className="text-sm"></h6> 
         <div className="bg-red-400 w-[50px] h-[2px] rounded mt-5 mx-10"></div>
         <p className="mx-10 mt-3 font-abc text-sm">The gradual accum       information about atomic and 
                                     small-scale behaviour...</p> 
        </div>
        <div className="flex-auto w-[329px] bg-white h-[292px] mx-12">
        <div className="bg-green-200 w-[70px] h-[76px] mt-8 mx-10 rounded-md">
        </div>
        <h6 className=" mx-10 mt-8 font-abc text-base font-bold">2,769 online courses</h6>
       <h6 className="text-sm"></h6>
       <h6 className="text-sm"></h6> 
         <div className="bg-red-400 w-[50px] h-[2px] rounded mt-5 mx-10"></div>
         <p className="mx-10 mt-3 font-abc text-sm">The gradual accumulation of 
information about atomic and 
small-scale behaviour...</p> 
        </div>
        
        
        <div className="flex-auto w-[329px] bg-blue-400 h-[292px] mr-0">
        <div className="bg-white w-[70px] h-[76px] mt-8 mx-10 rounded-md">
        </div>
        <h6 className=" mx-10 mt-8 font-abc text-base font-bold">training Courses</h6>
       <h6 className="text-sm"></h6>
       <h6 className="text-sm"></h6> 
         <div className="bg-white w-[50px] h-[2px] rounded mt-5 mx-10"></div>
         <p className="mx-10 mt-3 font-abc text-sm">The gradual accum       information about atomic and 
                                     small-scale behaviour...</p> 

         

        </div>
      </div>
        
      

    </div>
  </div>
</div>
  );
}