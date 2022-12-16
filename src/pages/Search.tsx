
import { useEffect, useState } from "react";
import { users } from "../models/Users";

export const Search = () => {
    const [searchUsers, setSearchUsers] = useState<{
        userId: number;
        firstName: string;
        lastName: string;
        phoneNumber: string;
        image: string;
        emailAddress: string;
    }[]>([]);

    useEffect(() => {
        setSearchUsers(users);
    }, [users])

    // This function is called when the input changes
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const enteredName = event.target.value.toLowerCase() ?? '';
        let _searchUsers = users.filter(user => {
            const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
            return fullName.search(enteredName) >= 0;
        });
        setSearchUsers(_searchUsers);
    };

    return (
        <div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                        Search Name
                    </label>
                </div>
                <div className="md:w-2/3">
                    <input onChange={onChange} placeholder="User name" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
                </div>
            </div>
            <div>
                <table className="table-auto">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">No</th>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Phone</th>
                            <th className="px-4 py-2">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {searchUsers.length > 0 ? searchUsers.map((user, i) => {
                            return (
                                <tr key={i}>
                                    <td className="border px-4 py-2">{i + 1}</td>
                                    <td className="border px-4 py-2"><a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href={`/view/${user.userId}`}>{user.firstName} {user.lastName}</a></td>
                                    <td className="border px-4 py-2">{user.phoneNumber}</td>
                                    <td className="border px-4 py-2">{user.emailAddress}</td>
                                </tr>
                            )
                        }) :
                            <tr>
                                <td className="border px-4 py-2" colSpan={4}>No user</td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>

    )
}


