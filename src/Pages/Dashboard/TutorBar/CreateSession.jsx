import { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import SectionTitle from "../../../Shared/SectionTitle";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateSession = () => {
    const [startDate, setStartDate] = useState(new Date());
    const { user } = useAuth()

    const handleAddFoodItem = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const price = form.price.value
        const made_by = user?.displayName
        const email = user?.email
        const quantity = form.quantity.value
        const food_origin = form.food_origin.value
        const category = form.category.value
        const image = form.image.value
        const description = form.description.value
        const food = { name, price, made_by, email, food_origin, quantity, category, image, description }
        console.log(food);
        e.target.reset()
    }
    return (
        <div>
            <SectionTitle heading='create study session' subHeading='This page is for creating session' />
            <form onSubmit={handleAddFoodItem} className="p-4">
                <div className="md:flex md:gap-2 lg:gap-0 md:mb-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold text-white">Session Title</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="title" placeholder="Session Title" className="input input-bordered bg-[#1B1616] text-white w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                            <span className="label-text font-bold text-white">Registration Fee </span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="registration_fee" placeholder="Registration Fee" className="input input-bordered font-sans bg-[#1B1616] text-white w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex md:gap-2 lg:gap-0 md:mb-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold text-white">Tutor Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" value={user?.displayName} name="buyer_name" placeholder="Buyer Name" className="input bg-[#1B1616] text-white input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                            <span className="label-text font-bold text-white">Tutor Email</span>
                        </label>
                        <label className="input-group">
                            <input type="email" value={user?.email} name="buyer_email" placeholder="Email" className="input bg-[#1B1616] input-bordered text-white w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex md:gap-2 lg:gap-0 md:mb-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold text-white">Registration Start Date</span>
                        </label>
                        <DatePicker className="bg-[#1B1616] text-white p-3 rounded-md w-full" selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                    <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                            <span className="label-text font-bold text-white">Registration end date</span>
                        </label>
                        <DatePicker className="bg-[#1B1616] text-white p-3 rounded-md w-full" selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                </div>
                <div className="md:flex md:gap-2 lg:gap-0 md:mb-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold text-white">Class Start Date</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="buyer_name" placeholder="Class Start Date" className="input bg-[#1B1616] text-white input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                            <span className="label-text font-bold text-white">Class End Date</span>
                        </label>
                        <label className="input-group">
                            <input type="email" name="buyer_email" placeholder="Class End Date" className="input bg-[#1B1616] input-bordered text-white w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex md:gap-2 lg:gap-0 md:mb-5">
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text font-bold text-white">Session Duration</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" placeholder="Session Duration" className="text-white input bg-[#1B1616] input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 lg:ml-4">
                        <label className="label">
                            <span className="label-text font-bold text-white">Status</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" defaultValue='Pending' placeholder="Session Duration" className="text-white input bg-[#1B1616] input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-bold text-white">Category</span>
                    </label>
                    <select name="category" className="select select-bordered text-white bg-[#1B1616] w-full ">
                        <option disabled selected>Select your Session Category</option>
                        <option>Mathematics</option>
                        <option>Computer Science</option>
                        <option>Chemistry</option>
                        <option>Literature</option>
                        <option>Data Science</option>
                        <option>Economics</option>
                    </select>
                </div>
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold text-white ">Description</span>
                        </label>
                        <label className="input-group">
                            <textarea name="description" placeholder="Description" rows="5" className="border-2 p-2 rounded-md bg-[#1B1616] text-white w-full"></textarea>
                        </label>
                    </div>
                </div>

                <button className="relative w-full inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
                    <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-[#c59d5f] via-[#1B1616] to-[#c59d5f] group-hover:opacity-100"></span>
                    {/* <!-- Top glass gradient --> */}
                    <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                    {/* <!-- Bottom gradient --> */}
                    <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                    {/* <!-- Left gradient --> */}
                    <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                    {/* <!-- Right gradient --> */}
                    <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                    <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                    <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                    <span className="relative">Create</span>
                </button>
            </form>
        </div>
    );
};

export default CreateSession;