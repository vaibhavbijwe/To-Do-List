import React, { useState } from 'react'

function Hero() {
    const [title,settitle] = useState("")
    const [desc, setdsc] = useState("")
    const [mainTask, setmainTask] = useState([])
    
    const submitHandler = (e)=>{
        e.preventDefault()
        setmainTask([...mainTask, {title, desc}])
        settitle("")
        setdsc("")
        console.log(mainTask)

    };
    const deleteHandler = (i) => {
        let copytask = [...mainTask]
        copytask.splice(i,1)
        setmainTask(copytask)


    }

    let renderTask = <h2>No Task Available</h2>

    if (mainTask.length>0) {
        renderTask = mainTask.map((t,i)=>{
            return (
                <li key={i} className='flex items-center justify-between'>
                <div className='flex justify-between mb-5 w-2/3'>
                <h5 className='text-2xl text-black font-bold'>{t.title}</h5>
                <h5 className='text-2xl text-black'>{t.desc}</h5>
            </div>
            <button onClick={()=>
                deleteHandler()
            } className='bg-black text-white px-4 py-2 rounded shadow-sm hover:bg-gray-50 hover:text-black hover:delay-400'>Delete</button>
            </li>
            )
        });  
    }

  return (
    
    <>
    <form  onSubmit={(submitHandler)}> 
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
        <button className='bg-orange-600 text-white px-4 py-2 rounded m-5 text-2xl font-bold shadow-sm  hover:bg-gray-50 hover:text-black hover:delay-200 ' >
            Add Task</button>
    </form>
    <hr />
    <div className='p-8 bg-amber-200'>
        <ul>
            {renderTask}
        </ul>
    </div>
    </>
  )
}

export default Hero