const ContactUs=()=>{
    return(
        <div>
            <h1 className="font-bold text-3xl p-4 m-4">Contact Us</h1>
            <form>
                <input 
                type="text"
                placeholder="name"
                className="border border-black p-2 m-2"/>

                <input
                type="text"
                className=""
                placeholder="message"/>
                <button className="rounded-lg border border-black p-2 m-2 bg-gray-100">Submit</button>
            </form>
        </div>
    )
}

export default ContactUs