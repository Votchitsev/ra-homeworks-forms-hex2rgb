import { useRef } from 'react';

function getRgb(hex) {

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  } : null
}

function Form({ r }) {

  const rgb = useRef();

  const handleChange = (e) => {
    
    if (e.target.value.length >= 7) {
      const rgbRow = getRgb(e.target.value)
      rgb.current.textContent = rgbRow ? `rgb(${rgbRow.r}, ${rgbRow.g}, ${rgbRow.b})` : 'Ошибка';
      console.log(r);
      r.current.style.backgroundColor = `rgb(${rgbRow.r}, ${rgbRow.g}, ${rgbRow.b})`;
    } else {
      rgb.current.textContent = '';
      r.current.style.backgroundColor = '';
    }
  }

  return (
    <form className="form">
      <input className="hex" type='text' onChange={handleChange}></input>
      <div className="rgb" ref={rgb}></div>
    </form>
  )
}

export default Form;
