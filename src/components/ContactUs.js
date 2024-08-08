const ContactUs = () =>{
    return (
        <div className="p-4 m-4 ">
            <h1 className="font-bold text-2xl">Contact Me :</h1>
            <input className="border border-black m-2 p-2" placeholder="Name" />
            <input className="border border-black m-2 p-2" placeholder="Message" />
            <button className="border border-black m-2 p-2 bg-green">Submit</button>
            {/* <h2>This is me learning React.js !!</h2> */}
        </div>
    )
}

export default ContactUs;