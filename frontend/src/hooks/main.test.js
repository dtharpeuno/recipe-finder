import { renderHook, act } from '@testing-library/react'
import { useUserStorage } from './main'

describe('main hooks -> useUserStorage', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  test('data in local storage should be null on init', () => {
    const { result } = renderHook(() => useUserStorage())

    expect(result.current.user).toBe(null)
  })

  test('add user to local storage and verify prescence', () => {
    const mockUser = {
      firstName: 'Darryl',
      lastName: 'Tharpe',
      emailAddress: 'test@email.com',
    }

    localStorage.setItem('user', JSON.stringify(mockUser))

    const { result } = renderHook(() => useUserStorage())

    expect(result.current.user).toEqual(mockUser)
  })

  test('saveUser function store user', () => {
    const { result } = renderHook(() => useUserStorage())

    act(() => {
      result.current.saveUser('Darryl', 'Tharpe', 'test@email.com')
    })

    const expectedUser = {
      firstName: 'Darryl',
      lastName: 'Tharpe',
      emailAddress: 'test@email.com',
    }

    expect(result.current.user).toEqual(expectedUser)

    const stored = JSON.parse(localStorage.getItem('user'))
    expect(stored).toEqual(expectedUser)
  })

  test('clearUser removes user from localStorage', () => {
    const mockUser = {
      firstName: 'Darryl',
      lastName: 'Tharpe',
      emailAddress: 'test@email.com',
    }

    localStorage.setItem('user', JSON.stringify(mockUser))

    const { result } = renderHook(() => useUserStorage())

    act(() => {
      result.current.clearUser()
    })

    expect(result.current.user).toBe(null)
    expect(localStorage.getItem('user')).toBe(null)
  })
})