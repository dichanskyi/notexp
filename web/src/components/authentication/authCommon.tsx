import { useState } from 'react'
import { AppButton } from '@components/common/inputs/AppButton'
import { AppTextField } from '@components/common/inputs/AppTextField'
import { MainLayout } from '@components/common/MainLayout'

import styles from '@styles/auth/auth.module.scss'
import { BaseURI } from '../../common/constants'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { authActions, authState as AuthState, setUser } from '../../redux/slices/AuthSlice'
import { User } from '../../entities/User'

export const AuthTypes = {
    login: {
        title: 'Log in',
        request: `${BaseURI}/...`,
    },
}

export interface IAuthType {
    title: string
    request: string
}

interface IAuthScreenConfig {
    config: IAuthConfig
}

export interface IAuthConfig {
    type: IAuthType
    passEmail?: boolean
    passEmailOrLogin?: boolean
    passLogin?: boolean
    passPassword?: boolean
    passPasswordConfirm?: boolean
    confirmCaptcha?: boolean
}

export const AuthScreen = ({ config }: IAuthScreenConfig): JSX.Element => {
    const [emailOrLogin, setEmailOrLogin] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [passwordConfirm, setPasswordConfirm] = useState<string>('')

    const dispatch = useAppDispatch()
    const authState = useAppSelector(AuthState)

    return (
        <MainLayout title={`${config.type.title}`}>
            <div className={styles.main}>
                <div className={styles.auth_window}>
                    {/* ! For tests */}
                    <h1> Log in</h1>
                    <div className={styles.auth_inputs}>
                        {config.passEmailOrLogin && (
                            <AppTextField
                                onChange={(event: any) => {
                                    setEmailOrLogin(event.target.value)
                                }}
                                placeholder={'Pass email or login'}
                                value={emailOrLogin}
                            />
                        )}
                        {config.passEmail && (
                            <AppTextField
                                onChange={(event: any) => {
                                    setEmail(event.target.value)
                                }}
                                placeholder={'Pass email'}
                                value={email}
                            />
                        )}
                        {config.passLogin && (
                            <AppTextField
                                onChange={(event: any) => {
                                    setLogin(event.target.value)
                                }}
                                placeholder={'Pass login'}
                                value={login}
                            />
                        )}
                        {config.passPassword && (
                            <AppTextField
                                onChange={(event: any) => {
                                    setPassword(event.target.value)
                                }}
                                placeholder={'Pass password'}
                                value={password}
                            />
                        )}
                        {config.passPasswordConfirm && (
                            <AppTextField
                                onChange={(event: any) => {
                                    setPasswordConfirm(event.target.value)
                                }}
                                placeholder={'Confirm password'}
                                value={passwordConfirm}
                            />
                        )}
                    </div>
                    <AppButton
                        onClick={() => {
                            dispatch(authActions.loginUser({ emailOrLogin, password }))
                        }}
                    >
                        {' '}
                        Submit 🦙
                    </AppButton>
                </div>
            </div>
        </MainLayout>
    )
}
