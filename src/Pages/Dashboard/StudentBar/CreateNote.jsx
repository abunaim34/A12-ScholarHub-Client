import toast from "react-hot-toast";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../Shared/SectionTitle";

const CreateNote = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()

    const handleCreateNote = e => {
        e.preventDefault()
        const form = e.target
        const title = form.title.value
        const email = form.email.value
        const description = form.description.value
        const createNote = {title, email, description}

        axiosSecure.post('/note', createNote)
        .then(res => {
            if(res.data.insertedId){
                e.target.reset()
                toast.success('Create note successfully')
            }
        })
    }
    return (
        <div>
            <SectionTitle heading='Create Note' subHeading='This Form is for Create your Note ' />
            <form onSubmit={handleCreateNote} className="p-4">
                <div className="md:flex md:gap-2 lg:gap-0">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold text-white">Title*</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="title" placeholder="Your note title" className=" text-white input input-bordered bg-gray-600 w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                            <span className="label-text font-bold text-white">Email*</span>
                        </label>
                        <label className="input-group">
                            <input type="email" value={user?.email} name="email" placeholder="Your email" className="input text-white  input-bordered font-sans bg-gray-600 w-full" />
                        </label>
                    </div>
                </div>
                <div className="mb-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold text-white">Description*</span>
                        </label>
                        <label className="input-group">
                            <textarea name="description" placeholder="Description" rows="5"   className="border-2 p-2 rounded-md bg-gray-600 text-white w-full"></textarea>
                        </label>
                    </div>
                </div>

                <button className="relative w-full inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
                    <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-[#c59d5f] via-[#1B1616] to-[#c59d5f] group-hover:opacity-100"></span>
                    <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                    <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                    <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                    <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                    <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                    <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                    <span className="relative">Create</span>
                </button>
            </form>
        </div>
    );
};

export default CreateNote;