import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";
import {CgDanger} from 'react-icons/cg'

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },

  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);


  return (
    // <div>
      <Forms onSubmit={handleSubmit(onSubmit)}>
        <div>
        <Input
          {...register("firstName", { required: "First Name cannot be empty" })}
          placeholder="First Name"
        />
        {errors.firstName && (
          <div style={{position:"relative"}}>
          <p style={{ color: "red",textAlign:"end",marginTop:-5 }}>{errors.firstName.message}</p>
           <CgDanger style={{fontSize:"24px",color:"red",position:"absolute",left:"92%",top:"-43px"}} />
          </div>

          
        )}
        </div>
        <div>
        <Input {...register("lastName",{ required: "Last Name cannot be empty" })} placeholder="Last Name" />
        {errors.lastName && (
          <div style={{position:"relative"}}>
          <p style={{ color: "red",textAlign:"end",marginTop:-5 }}>{errors.lastName.message}</p>
           <CgDanger style={{fontSize:"24px",color:"red",position:"absolute",left:"92%",top:"-43px"}} />
          </div>
        )}
        </div>
        <div>
        <Input
          {...register("email",
          { 
            required: "Email cannot be empty",
            pattern: {
              value:/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message:"Looks like this not an email"
            }
          }
        )}
          placeholder="Email Address"
        />
        {errors.email && (
          <div style={{position:"relative"}}>
          <p style={{ color: "red",textAlign:"end",marginTop:-5 }}>{errors.email.message}</p>
          <CgDanger style={{fontSize:"24px",color:"red",position:"absolute",left:"92%",top:"-43px"}} />
          </div>
        )}
        </div>
        <div >
        <Input
          type="password"
          {...register("password",{ required: "Password cannot be empty" })}
          placeholder="Password"
          
        />
        {errors.password && (
          <div style={{position:"relative"}}>
          <p style={{ color: "red",textAlign:"end",marginTop:-5 }}>{errors.password.message}</p>
           <CgDanger style={{fontSize:"24px",color:"red",position:"absolute",left:"92%",top:"-43px"}} />
          </div>
        )}
        </div>
        <Button type="submit">CLAIM YOUR FREE TRIAL</Button>

      <FooterDiv>
        <P1>By clicking the button,you are agreening to our</P1>
        <P2>Terms and Services</P2>
      </FooterDiv>
      </Forms>
    // </div>
  );
};

const Forms = styled.form`
    width:483px;
    border: none;
    background: #FFFFFF;
    box-shadow: 0px 8px 0px rgba(0, 0, 0, 0.14688);
    border-radius: 10px;
    padding:30px;
    border: 0.5px solid grey;
    margin-top: 20px;
    @media screen and (max-width:576px){
      padding: 15px;
      width: 300px;
      display: block;
      margin: auto;
      text-align: center;
    }
`;
const Input = styled.input`
    width:460px;
    height: 56px;
    background: #FFFFFF;
    border: 1px solid #DEDEDE;
    border-radius: 5px;
    margin: 10px;
    padding: 0px 6px;
    font-size: 15px;
    &:focus{
      outline: none;
    }
    @media screen and (max-width:576px){
     width: 250px;
     height: 40px;
    }
    
`;
const Button = styled.button`
    width: 460px;
    height: 56px;
    background: #38CC8B;
    box-shadow: inset 0px -4px 0px rgba(0, 0, 0, 0.0908818);
    border-radius: 5px;
    color: #fff;
    font-weight: bold;
    font-size: 15px;
    margin: 10px;
    border: none;
    cursor: pointer;
    @media screen and (max-width:576px){
      width: 250px;
      height: 40px;
    }
`;
const FooterDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const P1 = styled.p`
   color:#A6A1CF;
   margin: 5px;
   @media screen and (max-width:576px){
        font-size: 10px;
    }
`
const P2 = styled.p`
    color: #fa6a6a;
    font-weight:bold;
    cursor: pointer;
    @media screen and (max-width:576px){
        font-size: 11px;
        font-weight: bold;
    }
`