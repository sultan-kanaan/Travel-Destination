import './Tours.css'
const Tours = (props) => {
    return (

        <div >{

            props.tour.map(data => {
                return (
                    <div >
                        <h3>Place :{data.name}</h3>
                        <img src={data.image} alt="" />
                    </div>
                )
            })
        }
        </div>
    )
};

export default Tours;