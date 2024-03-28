import React from 'react'
import Swal from 'sweetalert2'

const ColorList = ({colorList = []}) => {
  
  const handleCopyColor = (color) =>{
    navigator.clipboard.writeText(color);

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `Color: ${color} Copied!`,
      showConfirmButton: false,
      timer:1500,
      timerProgressBar: true,
    })
  }

  return (
    <div className='list-group text-center' style={{"font-size": "10px"}}>
      { colorList.length  > 0 ? colorList.map((color,index) => (
         <button
          key={index} 
          type="button" 
          className="list-group-item  list-group-item-action text-white"
          aria-current="true"
          title="copiar"
          style={{
            background: color,
            fontWeight: "bolder"
          }}
          onClick={()=> handleCopyColor(color)}
        >
          {color}
       </button>
      )) : (
      <div className='alert alert-danger' role='alert'>
        <b>Without Data</b> 
      </div>
      )} 
    </div>
  )
}

export default ColorList