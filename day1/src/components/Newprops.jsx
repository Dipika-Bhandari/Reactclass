import PropTypes from 'prop-types'

const Newprops = (props) => {
  return (
   <div>
    <h1>{props.title}</h1>
    <h3>{props.description}</h3>
    <h3>{props.age}</h3>
    <h3>{props.marriagestatus.toString()}</h3>
   </div>
  )
}

Newprops.Myprop={
    title:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    age:PropTypes.number.isRequired,
    marriagestatus:PropTypes.bool.isRequired,

}




export default Newprops