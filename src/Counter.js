import React,{useEffect, useState} from 'react'

export default function Counter({initial=1,max=1000}) {
    const [count,SetCount]=useState(initial)
    const countStyle={
        borderTop:'1px solid #B24242',
        borderBottom:'1px solid #B24242',
        borderLeft:'none',borderRight:'none',
        
       backgroundColor:'#FBE8E8',
       color:'#B24242',
       fontWeight:900,width:'59px',height:'52px',
       fontSize:'21px',
       outline:'none',
       textAlign:'center'
    }
    const rightStyle={
        border:'1px solid #B24242',width:'60px',height:'56px',color:'white',
        backgroundColor:'#B24242',fontSize:'21px',
        fontWeight:900,
        borderRadius:'0 8px 8px 0',
        padding:0,
        margin:0
        
        
    }
    const leftStyle={
        width:'60px',height:'56px',backgroundColor:'white',color:'#B24242',border:'1px solid #B24242',
        fontSize:'21px',
        borderRadius:'8px 0 0 8px',
        fontWeight:900,
      
    }
    const add=(e,num)=>{
        console.log(count,num)
        if(Number.isInteger(count)){
            SetCount(prev=>Math.min(max,prev+num))
        }else{
            SetCount(prev=>Math.min(Number(prev+num),max))
        };
    }
    const onchange=(e)=>{
        if(Number.isInteger(Number(e.target.value))  ){
            SetCount(Math.min(Number(e.target.value),max))
        }
        if(e.target.value==='-'){
            SetCount('-')
        }
        if(e.target.value===''){
            SetCount('')
        }
        console.log('change',count)
    }
    const blur=(e)=>{
        if(count===''){
            SetCount(initial)
        }
    }
    
    return (
        <div style={{margin:'40vh 40vw',display:'flex',minHeight:'100px',minWidth:'100px'}}>
            <button onClick={(e)=>add(e,-1)} style={leftStyle}>-</button>
            <input type='text' value={count} onChange={onchange} onBlur={blur} style={countStyle} />
            <button onClick={(e)=>add(e,1)} style={rightStyle}>+</button>
        </div>
    )
}
