import { renderHook, waitFor } from '@testing-library/react'
import { vi } from 'vitest'
import { 
    getRecipeByIngredient, 
    getRecipeByIdMeal, 
    getRecipeByArea } from './recipe'

describe('recipe hooks -> getRecipeByArea', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  test('returns Data on successful fetch', async () => {
    const mockData = {
      meals: [{ idMeal: '123'}],
    }

    vi.stubGlobal('fetch', vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData),
      })
    ))

    const { result } = renderHook(() =>
      getRecipeByArea({ recipeArea: 'Spain' })
    )

    await waitFor(() => {
      expect(result.current.data).not.toBe(null)
    })
    
    expect(result.current.data).toEqual(mockData)
    expect(result.current.error).toBe(false)
    expect(result.current.loading).toBe(false)
  })

  test('handles API error response', async () => {
    const mockError = { message: 'Failed request' }

    vi.stubGlobal('fetch', vi.fn(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.resolve(mockError),
      })
    ))

    const { result } = renderHook(() =>
      getRecipeByArea({ recipeArea: 'Spain' })
    )

    await waitFor(() => {
      expect(result.current.loading).toBe(false)
    })

    expect(result.current.error).toEqual(mockError)
  })
})

describe('recipe hooks -> getRecipeByIngredient', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  test('returns Data on successful fetch', async () => {
    const mockData = {
      meals: [{ idMeal: '123'}],
    }

    vi.stubGlobal('fetch', vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData),
      })
    ))

    const { result } = renderHook(() =>
      getRecipeByIngredient({ recipeIngredient: 'Chicken' })
    )

    await waitFor(() => {
      expect(result.current.data).not.toBe(null)
    })
    
    expect(result.current.data).toEqual(mockData)
    expect(result.current.error).toBe(false)
    expect(result.current.loading).toBe(false)
  })

  test('handles API error response', async () => {
    const mockError = { message: 'Failed request' }

    vi.stubGlobal('fetch', vi.fn(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.resolve(mockError),
      })
    ))

    const { result } = renderHook(() =>
      getRecipeByIngredient({ recipeIngredient: 'Chicken' })
    )

    await waitFor(() => {
      expect(result.current.loading).toBe(false)
    })

    expect(result.current.error).toEqual(mockError)
  })
})

describe('recipe hooks -> getRecipeByIdMeal', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  test('returns Data on successful fetch', async () => {
    const mockData = {
      meals: [{ idMeal: '123', strMeal: 'Chicken' }],
    }

    vi.stubGlobal('fetch', vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData),
      })
    ))

    const { result } = renderHook(() =>
      getRecipeByIdMeal({ idMeal: '123' })
    )

    await waitFor(() => {
      expect(result.current.data).not.toBe(null)
    })

    expect(result.current.data).toEqual(mockData)
    expect(result.current.error).toBe(false)
    expect(result.current.loading).toBe(false)
  })

  test('handles API error response', async () => {
    const mockError = { message: 'Failed request' }

    vi.stubGlobal('fetch', vi.fn(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.resolve(mockError),
      })
    ))

    const { result } = renderHook(() =>
      getRecipeByIdMeal({ idMeal: '123' })
    )

    await waitFor(() => {
      expect(result.current.loading).toBe(false)
    })

    expect(result.current.error).toEqual(mockError)
  })
})