import Breadcrumb from "./Breadcrumb"



const Subbanner = (props) => {
  return (
<>
    <div className="relative bg-blue-200 pb-20 mb-10 isolate z-0 bg-white px-6 pt-14 lg:px-8">
    

<div className="text-center">
<h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
{props.title}
</h1>

</div>
<div className="text-center mt-4">
            <Breadcrumb 
            Breadcrumb={props.Breadcrumb}/>
          </div>
</div>


</>
  )
}

export default Subbanner