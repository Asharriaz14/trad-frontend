
import Layout from './reuseablecomponents/Layout'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './component/Home'
import Login from './reuseablecomponents/Login'
import Register from './reuseablecomponents/Register'
import PersonalDetailsForm from './component/Component(Admin)/PersonalDetailForm'
import ContactDetail from './component/Component(Admin)/ContactDetail'
import Transferpayment from './component/Component(Admin)/Transferpayment'
import Depositpaymentaccount from './component/Component(Admin)/Depositpaymentaccount'
import DepositPaymentmethod from './component/Component(Admin)/DepositPaymentmethod'
// import TransactionConfirmationForm from './component/Component(Admin)/TransactionConfirmationForm '
import Support from './component/Component(Admin)/Support'
import Passwordsetting from './component/Component(Admin)/Passwordsetting'
import OpenNewAccounttype from './component/Component(Admin)/opennewAccounttype'
// import TradingAccountsTable from './component/Component(Admin)/TradingAccountTable'
import Emailverification from './component/Component(Admin)/Emailverification'
import NumberVerification from './component/Component(Admin)/NumberVerification'
import Uploaddocunment from './component/Component(Admin)/Uploaddocunment'
import ContactUs from './component/ContactUs'
import TradingInterface from './component/Component(Admin)/TradingInterface'
import VerifyResidence from './component/Component(Admin)/VerifyResidence'
import Withdrawal from './component/Component(Admin)/Withdrawal'
import WithdrawalForm from './component/Component(Admin)/withdrawalform'
import Dashboard from './component/Component(Admin)/Dashboard'
import TransactionConfirmationForm from './component/Component(Admin)/TransactionConfirmationForm '
import CodeVerification from './component/Component(Admin)/Codeverification'
import Joinus from './component/Component(Admin)/Joinus'
import { useEffect } from 'react'
import { TradeTable } from './component/Component(Admin)/TradeTable'

const App = () => {

const navigate=useNavigate()

useEffect(()=>{
checkauthentication()
},[])

 let checkauthentication=()=>{
const token=localStorage.getItem('auth token')
if(token){
  navigate("/profile")
}else{
  navigate("/")

}
 }


  return (
    <div>
    <Layout>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/contactus' element={<ContactUs/>}/>
      <Route path='/profile/personalDetail' element={<PersonalDetailsForm/>}/>
      <Route path='/profile/contactDetail' element={<ContactDetail/>}/>
      <Route path='/wallet/transfer' element={<Transferpayment/>}/>
      <Route path='/wallet/deposit/account' element={<Depositpaymentaccount/>}/>
      <Route path='/wallet/deposit/method' element={<DepositPaymentmethod/>}/>
      <Route path='/wallet/deposit/money' element={<TransactionConfirmationForm/>}/>
      <Route path='/profile/support' element={<Support/>}/>
      <Route path='/profile/password' element={<Passwordsetting/>}/>
      <Route path='/profile/open/new/account' element={<OpenNewAccounttype/>}/>
      {/* <Route path='/Trading/Account/Table' element={<TradingAccountsTable/>}/> */}
      <Route path='/Trading/Account/Table' element={<TradeTable/>}/>
      <Route path='/profile/email/verification' element={<Emailverification/>}/>
      <Route path='/profile/number/verification' element={<NumberVerification/>}/>
      <Route path='/profile/uploaddocunment' element={<Uploaddocunment/>}/>
      <Route path='/profile/trade' element={<TradingInterface/>}/>
      <Route path='/profile/trade/verifyresidence' element={<VerifyResidence/>}/>
      <Route path='/profile/withdrawal' element={<Withdrawal/>}/>
      <Route path='/profile/withdrawal/form' element={<WithdrawalForm/>}/>
      <Route path='/profile/code/verification' element={<CodeVerification/>}/>
      <Route path='/profile/joinus' element={<Joinus/>}/>
      <Route path='/profile' element={<Dashboard/>}/>
     </Routes>
    </Layout>
    </div>
  )
}

export default App

