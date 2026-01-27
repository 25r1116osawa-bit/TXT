
const ColorfulMessage = (props) => {

  console.log(props)
const ContentStyleA = {
    color: props.color,
   
  }
  return (
    <div>
     <p style={ContentStyleA}>{props.message}</p>
    </div>
  );
}
export default ColorfulMessage;