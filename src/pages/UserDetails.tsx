import { useParams } from "react-router-dom";
import { users } from "../models/Users";

export const UserDetails = () => {
    const params = useParams();
    const uid = params["uid"] ?? "";
    const retUser = users.find(user => { return String(user.userId) === uid; });

    return (
        <div className="flex font-sans">
            <div className="flex-none w-48 relative">
                <img src={`/${retUser?.image}`} alt="" className="absolute inset-0 w-full h-full object-cover rounded-xl" loading="lazy" />
            </div>
            <div className="flex-auto p-6">
                <div className="flex flex-wrap">
                    <h1 className="flex-auto text-lg font-semibold text-slate-900">
                        User Info
                    </h1>
                    <div className="text-lg font-semibold text-slate-500">
                        <button className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
                            <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                            </svg>
                        </button>
                    </div>

                    <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                        <figcaption className="font-medium">
                            <div className="text-sky-500 dark:text-sky-400">
                                FirstName:
                            </div>
                            <div className="text-slate-700 dark:text-slate-500">
                                {`${retUser?.firstName} ${retUser?.lastName}`}
                            </div>
                        </figcaption>
                    </div>
                    <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                        <figcaption className="font-medium">
                            <div className="text-sky-500 dark:text-sky-400">
                                Phone:
                            </div>
                            <div className="text-slate-700 dark:text-slate-500">
                                {`${retUser?.phoneNumber}`}
                            </div>
                        </figcaption>
                    </div>
                    <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
                        <figcaption className="font-medium">
                            <div className="text-sky-500 dark:text-sky-400">
                                Email:
                            </div>
                            <div className="text-slate-700 dark:text-slate-500">
                                {`${retUser?.emailAddress}`}
                            </div>
                        </figcaption>
                    </div>
                </div>
                <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                    <div className="space-x-2 flex text-sm">
                        <label>
                            <input className="sr-only peer" name="size" type="radio" value="1" />
                            <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                1
                            </div>
                        </label>
                        <label>
                            <input className="sr-only peer" name="size" type="radio" value="2" />
                            <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                2
                            </div>
                        </label>
                        <label>
                            <input className="sr-only peer" name="size" type="radio" value="3" />
                            <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                3
                            </div>
                        </label>
                        <label>
                            <input className="sr-only peer" name="size" type="radio" value="4" />
                            <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                4
                            </div>
                        </label>
                        <label>
                            <input className="sr-only peer" name="size" type="radio" value="5" checked />
                            <div className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">
                                5
                            </div>
                        </label>
                    </div>
                </div>
                <div className="flex space-x-4 mb-6 text-sm font-medium">
                    <div className="flex-auto flex space-x-4">
                        <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
                            Zoom in
                        </button>
                        <button className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
                            Zoom out
                        </button>
                    </div>
                    <button className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">
                        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                        </svg>
                    </button>
                </div>
                <p className="text-sm text-slate-700">
                    Please contact the administrator (Vinh Nguyen) for more information.
                </p>
            </div>
        </div>
    )
}