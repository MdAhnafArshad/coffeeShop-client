import Swal from 'sweetalert2'


const AddCoffee = () => {
    


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const test = form.test.value;
        const category = form.category.value;
        const details = form.details.value;
        const photoUrl = form.photoUrl.value;
        const user = { name, quantity, supplier, test, category, details, photoUrl }
        console.log(user);



        // send data to the server
        fetch('http://localhost:5000/addCoffee', {
            method: 'POST',
            headers:{
                'content-type': 'application/json',
            },
            body: JSON.stringify(user), 
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            Swal.fire({
                title: 'Sweet!',
                text: 'ooooo add your item.',
                imageUrl: 'https://unsplash.it/400/200',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
              })
        });


    }

    return (
        <div>
            <h2 className="text-5xl font-bold text-pink-800">ADD NEW COFFEE</h2>
            <form onSubmit={handleSubmit}>
                {/* name and quantity */}
                <div className="form-control grid lg:grid-cols-2 md:grid-cols-1 gap-2">
                    <div>
                        <span className="label-text  text-2xl font-mono">Name</span>
                        <label className="input-group ">
                            <input type="text" name="Name" placeholder="Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div>
                        <span className="label-text  text-2xl font-mono">Quantity</span>
                        <label className="input-group ">
                            <input type="text" name="quantity" placeholder="Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>
                {/* supplier and test */}
                <div className="form-control grid lg:grid-cols-2 md:grid-cols-1 gap-2">
                    <div>
                        <span className="label-text  text-2xl font-mono">supplier</span>
                        <label className="input-group ">
                            <input type="text" name="supplier" placeholder="supplier" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div>
                        <span className="label-text  text-2xl font-mono">test</span>
                        <label className="input-group ">
                            <input type="text" name="test" placeholder="test" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>
                {/* category and detail */}
                <div className="form-control grid lg:grid-cols-2 md:grid-cols-1 gap-2">
                    <div>
                        <span className="label-text  text-2xl font-mono">category</span>
                        <label className="input-group ">
                            <input type="text" name="category" placeholder="category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div>
                        <span className="label-text  text-2xl font-mono">details</span>
                        <label className="input-group ">
                            <input type="text" name="details" placeholder="details" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>
                {/* photo url */}
                <div className="form-control ">
                    <div>
                        <span className="label-text  text-2xl font-mono">photo Url</span>
                        <label className="input-group ">
                            <input type="text" name="photoUrl" placeholder="photo url" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>

                <input type="submit" value="submit" className="btn btn-outline w-full my-5" />
            </form>
        </div>
    );
};

export default AddCoffee;