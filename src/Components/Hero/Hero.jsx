import React, { useState } from 'react'

function Hero() {
    const [title,settitle] = useState("")
    const [desc, setdsc] = useState("")
  return (
    
    <>
    <form>
        <input type="text" className='text-2xl text-black rounded border-zinc-950 border-4 m-8 px-4 py-2'
        placeholder='Enter Title Here'
        value={title} 
        onChange={(e)=>{
            settitle(e.target.value)

        }}
        />
        <input type="text" className='text-2xl border-zinc-950 border-4 m-8 px-4 py-2' 
        placeholder='Enter Description here'
        value={desc}
        onChange={(e)=>{
            setdsc(e.target.value)

        }}
        />
        <button className='bg-orange-600 text-white px-4 py-2 rounded m-5 text-2xl font-bold shadow-sm  hover:bg-orange-400' >
            Add Task</button>
    </form>
    </>
  )
}

export default Hero