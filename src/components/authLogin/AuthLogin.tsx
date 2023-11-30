import {useId} from "react";
import {useForm} from "react-hook-form";
import {useGetAuthMeQuery, useLoginMutation} from "../../services/authApi/authMeApi.ts";
import { useNavigate} from "react-router-dom";


type FormData ={
    email:string
    password:string
    rememberMe:boolean
}

export const AuthLogin = () => {
    const id = useId()
    const navigate = useNavigate()
    const {data:myProfileId} = useGetAuthMeQuery({})
    const [loginForm] = useLoginMutation()
    const  {register, handleSubmit, formState: {isSubmitting, errors}} = useForm<FormData>()
    const onSubmit = (data:FormData) =>{
        loginForm(data)
            .then(()=>{
                navigate(`/profile/${myProfileId?.data.id}`)
            })
    }

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
          <div>
              <label htmlFor={`${id}-emailId`}>Email</label>
              <input
                  id={`${id}-emailId`}
                  type='email'
                  autoComplete='email'
                  {...register('email', {required:'The field is required'})}
                  aria-describedby={`${id}-email-error-message`}
              />
              {errors.email && <p id={`${id}-email-error-message`} aria-live='assertive'>{errors.email?.message}</p>}
          </div>
          <div>
              <label htmlFor={`${id}-password`}>Password</label>
              <input
                  id={`${id}-password`}
                  type='password'
                  autoComplete='current-password'
                  {...register('password', {required:'The field is required', minLength: {
                          value:8 , message: 'min is 8'
                  }
                  })} />
              {errors.password && <p id={`${id}-password-error-message`} aria-live='assertive'>{errors.password?.message}</p>}
          </div>

          <div>
              <label>
                  Remember me
                  <input type='checkbox' {...register('rememberMe')}/>
              </label>
          </div>
          <button disabled={isSubmitting} type={"submit"}>Sign In</button>
      </form>
    );
};

