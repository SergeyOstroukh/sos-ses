import { useId } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { useGetAuthMeQuery, useLoginMutation } from '@/services'

type FormData = {
  email: string
  password: string
  rememberMe: boolean
}

export const AuthLogin = () => {
  const id = useId()
  const navigate = useNavigate()
  const { data: myProfileId } = useGetAuthMeQuery({})
  const [loginForm] = useLoginMutation()
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
  } = useForm<FormData>()
  const onSubmit = (data: FormData) => {
    loginForm(data).then(() => {
      navigate(`/profile/${myProfileId?.data.id}`)
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor={`${id}-emailId`}>Email</label>
        <input
          autoComplete={'email'}
          id={`${id}-emailId`}
          type={'email'}
          {...register('email', { required: 'The field is required' })}
          aria-describedby={`${id}-email-error-message`}
        />
        {errors.email && (
          <p aria-live={'assertive'} id={`${id}-email-error-message`}>
            {errors.email?.message}
          </p>
        )}
      </div>
      <div>
        <label htmlFor={`${id}-password`}>Password</label>
        <input
          autoComplete={'current-password'}
          id={`${id}-password`}
          type={'password'}
          {...register('password', {
            minLength: {
              message: 'min is 8',
              value: 8,
            },
            required: 'The field is required',
          })}
        />
        {errors.password && (
          <p aria-live={'assertive'} id={`${id}-password-error-message`}>
            {errors.password?.message}
          </p>
        )}
      </div>

      <div>
        <label>
          Remember me
          <input type={'checkbox'} {...register('rememberMe')} />
        </label>
      </div>
      <button disabled={isSubmitting} type={'submit'}>
        Sign In
      </button>
    </form>
  )
}
