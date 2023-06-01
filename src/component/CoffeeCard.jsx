
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, setCoffees, coffees }) => {
    console.log(coffee);
    const {photoUrl, _id} = coffee

    //detete a coffee
    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result => {
                if (result.isConfirmed) {

                    fetch(`http://localhost:5000/addCoffee/${id}`, {
                        method: 'DELETE',
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    'Your coffee has been deleted.',
                                    'success'
                                )   
                                const remaining = coffees.filter(cof => cof._id !== _id);
                                setCoffees(remaining);
                            }
                        })

                }
            }))

    }




    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={photoUrl} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>{_id}</p>
                    <div className="">
                        <div className="btn-group btn-group-vertical">
                            <button className="btn btn-active">view</button>
                            <Link to={`updateCoffee/${_id}`}><button className="btn">edit</button></Link>
                            <button onClick={() => handleDelete(_id)} className="btn">x</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;