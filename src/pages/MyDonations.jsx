import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import Card from "../components/Card";

const MyDonations = () => {
    const { user } = useContext(AuthContext)
    console.log(user);
    const email = user.email;
    const [donations, setDonations] = useState([]);

    useEffect(() => {
        axios.get(`https://fundy-server.vercel.app/donations/${email}`)
            .then(res => setDonations(res.data))
    }, [])

    console.log(donations);

    return (
        <div>
            <h2 className="text-3xl text-center">Donation By {user.email}</h2>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {
                        donations.map(donation => <Card key={donation._id} donation={donation}></Card>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyDonations;