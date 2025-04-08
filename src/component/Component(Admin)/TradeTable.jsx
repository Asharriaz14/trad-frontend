


import { Clipboard, Edit2 } from 'lucide-react';
import { Link} from 'react-router-dom';
import { useAccountDetailsQuery } from '../../redux/createaccountapi';
// import { useAccountsdetailQuery } from '../../redux/createaccountapi';
// import { useAccountsdetailQuery } from '../../redux/createaccountapi';

export const TradeTable = () => {
    const { data, error, isLoading, isError } = useAccountDetailsQuery();
console.log(data)
    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen bg-[#23282B]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#00B894]"></div>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="flex justify-center items-center h-screen bg-[#23282B] text-red-500">
                Error loading account details: {error.message}
            </div>
        );
    }

    console.log(data)
    // Extract accounts from the API response
    const accounts = data?.data?.map(account => ({
        accountNumber: account.accountType || account.accounttype || 'Standard',
        accountId: `${account._id.slice(-8)} / Real`, // Shorten the ID
        LoginId: account._id.slice(-4), // Last 4 digits as login ID
        leverage: account.leverage,
        balance: '0.00', // You might want to fetch this from your API
        freeMargin: '0.00', // You might want to fetch this from your API
        currency: account.currency,
        accountType: account.accountType || account.accounttype
    })) || [];

    return (
        <div className="bg-[#23282B] min-h-screen py-8 px-4">
            <div className="max-w-6xl mx-auto text-white font-sans">
                <div className="flex items-center mb-6">
                    <button className="px-4 py-2 text-white border-2 border-gray-600 bg-[#2C3235]">
                        Trading Accounts
                    </button>
                    <div className="ml-auto">
                        <Link to="/profile/open/new/account">
                            <button className="hover:bg-[#253333] text-[#00B894] px-4 py-2 rounded flex items-center">
                                + Create New Account
                            </button>
                        </Link>
                    </div>
                </div>
                
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-[#2C3235] border-2 border-gray-600 text-gray-400 text-sm">
                            <tr>
                                <th className="p-3">ACCOUNT#</th>
                                {/* <th className="p-3">Login Id</th> */}
                                <th className="p-3">LEVERAGE</th>
                                <th className="p-3">BALANCE</th>
                                <th className="p-3">CURRENCY</th>
                                {/* <th className="p-3">TYPE</th> */}
                                <th className="p-3">ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {accounts.map((account, index) => (
                                <tr key={index} className="border-b border-gray-600 bg-[#2C3235] hover:bg-[#3a3a3a]">
                                    <td className="p-3 flex items-center">
                                        <span>{account.accountNumber}</span>
                                        <span className="text-gray-500 ml-2 text-sm">{account.accountId}</span>
                                        <Clipboard className="ml-2 text-gray-500 w-4 h-4 cursor-pointer" />
                                    </td>
                                    {/* <td className="p-3 text-yellow-500">{account.LoginId}</td> */}
                                    <td className="p-3">
                                        {account.leverage}
                                        <Edit2 className="inline-block ml-2 w-4 h-4 text-gray-500 cursor-pointer" />
                                    </td>
                                    <td className="p-3">{account.balance}</td>
                                    <td className="p-3">{account.currency}</td>
                                    {/* <td className="p-3 text-sm text-gray-400">
                                        {account.accountType}
                                    </td> */}
                                    <td className="p-3">
                                        <div className="flex space-x-2">
                                            <button className="bg-[#253333] text-[#00B894] px-3 py-1 rounded text-sm">
                                                Fund
                                            </button>
                                            <button className="bg-[#253333] text-[#00B894] px-3 py-1 rounded text-sm">
                                                Trade
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

// export default TradingAccountsTable;
