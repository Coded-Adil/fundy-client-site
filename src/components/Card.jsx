const Card = ({ donation }) => {
    return (
        <div className="card mx-auto rounded-2xl my-8 border shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={donation.image}
                    alt=""
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{donation.name}</h2>
                <p className="text-md text-gray-600">Campaign By: {donation.name}</p>
                <p className="text-md text-gray-600">Contact Us: {donation.email}</p>
            </div>
        </div>);
};

export default Card;