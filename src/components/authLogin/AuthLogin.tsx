import {useId} from "react";
import {useForm} from "react-hook-form";

type FormData ={
    email:string
    password:string
    rememberMe:boolean
}

export const AuthLogin = () => {
    const id = useId()

    const  {register, handleSubmit, formState: {isSubmitting}} = useForm<FormData>()
    const onSubmit = (data:FormData) =>{
        console.log(data)
    }

    return (
      <form>
          <div>
              <label htmlFor={`${id}-emailId`}>Email</label>
              <input id={`${id}-emailId`} type='email' autoComplete='email' {...register('email', {required:'The field is required'})}/>
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

